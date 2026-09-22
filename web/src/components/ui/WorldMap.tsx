import { useEffect, useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography, useMapContext } from 'react-simple-maps';
import worldTopology from 'world-atlas/countries-50m.json';
import { hqCountry, operatingCountries, operatingCountryIds } from '../../data/operatingCountries';
import indiaOfficial from '../../data/india-official.json';

/** How far each arc bows away from a straight line, as a share of its length. */
const ARC_BEND = 0.22;

/** Gap between one line starting to draw and the next. */
const DRAW_STAGGER_S = 0.25;

/** When the repeating pulses begin: once every line has finished drawing. */
const PULSE_START_S = 6;

/** One full round of pulses. Must match the world-map-flow / world-map-ping
 * durations in global.css. */
const PULSE_CYCLE_S = 5;

/** world-atlas id for India, whose outline there follows the de facto line of
 * control and leaves out parts of Jammu & Kashmir and Ladakh. */
const INDIA_ID = '356';

/**
 * India drawn with its official boundary, including all of Jammu & Kashmir and
 * Ladakh. The outline comes from Natural Earth's India point-of-view dataset
 * (src/data/india-official.json). Drawn after the other countries, so it covers
 * the areas world-atlas assigns to neighbouring countries.
 */
function OfficialIndia() {
  const { path } = useMapContext();
  return <path d={path(indiaOfficial as GeoJSON.Feature) ?? undefined} className="world-map-country is-active" />;
}

/**
 * Curved lines from the head office out to every other country, with a pulse
 * travelling along each one. Rendered inside ComposableMap so it can use the
 * map's projection to place the points.
 */
function Connections() {
  const { projection } = useMapContext();
  const [x1, y1] = projection(hqCountry.point) as [number, number];

  // Ordered clockwise around the HQ, starting from the west, so the draw-in
  // and the pulses sweep round the map rather than jumping between countries.
  const links = operatingCountries
    .filter((country) => !country.isHq)
    .map((country) => {
      const [x2, y2] = projection(country.point) as [number, number];
      const dx = x2 - x1;
      const dy = y2 - y1;
      // Bow each arc upward (toward the top of the map), whichever way it runs.
      const sign = dx >= 0 ? -1 : 1;
      const cx = (x1 + x2) / 2 + sign * dy * ARC_BEND;
      const cy = (y1 + y2) / 2 - sign * dx * ARC_BEND;
      return { id: country.isoNumeric, d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, angle: Math.atan2(dy, dx) };
    })
    .sort((l1, l2) => l1.angle - l2.angle);

  // Pulses leave one line at a time, spread evenly across each cycle.
  const pulseGap = PULSE_CYCLE_S / links.length;

  return (
    <g className="world-map-links">
      {links.map((link, i) => (
        <g key={link.id}>
          <path
            d={link.d}
            pathLength={1}
            className="world-map-link"
            style={{ animationDelay: `${i * DRAW_STAGGER_S}s` }}
          />
          <path
            d={link.d}
            pathLength={1}
            className="world-map-pulse"
            style={{ animationDelay: `${PULSE_START_S + i * pulseGap}s` }}
          />
        </g>
      ))}
      <g className="world-map-hq" transform={`translate(${x1},${y1})`}>
        <circle r={7} className="world-map-hq-ring" style={{ animationDelay: `${PULSE_START_S}s` }} />
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
            geographies
              .filter((geo) => geo.id !== INDIA_ID)
              .map((geo) => {
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
        <OfficialIndia />
        <Connections />
      </ComposableMap>
    </div>
  );
}
