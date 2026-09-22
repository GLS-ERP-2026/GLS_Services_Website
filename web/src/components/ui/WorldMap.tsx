import { useEffect, useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography, useMapContext } from 'react-simple-maps';
import worldTopology from 'world-atlas/countries-50m.json';
import { hqCountry, operatingCountries, operatingCountryIds } from '../../data/operatingCountries';

/** How far each arc bows away from a straight line, as a share of its length. */
const ARC_BEND = 0.22;

/** Gap between one line starting to draw and the next. */
const DRAW_STAGGER_S = 0.25;

/** When the repeating pulses begin: once every line has finished drawing. The
 * 5s repeat itself lives in the CSS (world-map-flow / world-map-ping). */
const pulseDelay = { animationDelay: '6s' };

/**
 * Curved lines from the head office out to every other country, with a pulse
 * travelling along each one. Rendered inside ComposableMap so it can use the
 * map's projection to place the points.
 */
function Connections() {
  const { projection } = useMapContext();
  const hq = projection(hqCountry.point) as [number, number];

  return (
    <g className="world-map-links">
      {operatingCountries
        .filter((country) => !country.isHq)
        .map((country, i) => {
          const [x2, y2] = projection(country.point) as [number, number];
          const [x1, y1] = hq;
          const dx = x2 - x1;
          const dy = y2 - y1;
          // Bow each arc upward (toward the top of the map), whichever way it runs.
          const sign = dx >= 0 ? -1 : 1;
          const cx = (x1 + x2) / 2 + sign * dy * ARC_BEND;
          const cy = (y1 + y2) / 2 - sign * dx * ARC_BEND;
          const d = `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
          // Lines draw one after another and each endpoint appears as its line
          // arrives. Pulses all leave together once the lines are drawn.
          const drawDelay = i * DRAW_STAGGER_S;
          return (
            <g key={country.isoNumeric}>
              <path d={d} pathLength={1} className="world-map-link" style={{ animationDelay: `${drawDelay}s` }} />
              <path d={d} pathLength={1} className="world-map-pulse" style={pulseDelay} />
              <circle
                cx={x2}
                cy={y2}
                r={3.5}
                className="world-map-point"
                style={{ animationDelay: `${drawDelay + 1.8}s` }}
              />
            </g>
          );
        })}
      <g className="world-map-hq" transform={`translate(${hq[0]},${hq[1]})`}>
        <circle r={7} className="world-map-hq-ring" style={pulseDelay} />
        <circle r={6.5} className="world-map-hq-dot" />
      </g>
    </g>
  );
}

export function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  // Lines draw out from the HQ the first time the map scrolls into view.
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsLive(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`world-map${isLive ? ' is-live' : ''}`}>
      {/* Framed on the region GLS works in (UK to Vietnam, Denmark to Angola)
          rather than the whole globe, so the countries and lines read clearly. */}
      <ComposableMap
        projection="geoMercator"
        width={800}
        height={560}
        projectionConfig={{ center: [51, 27], scale: 330 }}
      >
        <Geographies geography={worldTopology}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const active = operatingCountryIds.has(geo.id as string);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={active ? 'world-map-country is-active' : 'world-map-country'}
                  tabIndex={-1}
                />
              );
            })
          }
        </Geographies>
        <Connections />
      </ComposableMap>
    </div>
  );
}
