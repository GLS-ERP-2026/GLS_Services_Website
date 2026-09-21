import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldTopology from 'world-atlas/countries-50m.json';
import { operatingCountries, operatingCountryIds } from '../../data/operatingCountries';

export function WorldMap() {
  return (
    <div className="world-map">
      <ComposableMap projection="geoNaturalEarth1" projectionConfig={{ scale: 165 }}>
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
        {operatingCountries
          .filter((country) => country.markerCoords)
          .map((country) => (
            <Marker key={country.isoNumeric} coordinates={country.markerCoords as [number, number]}>
              <circle r={4} className="world-map-marker" />
            </Marker>
          ))}
      </ComposableMap>
    </div>
  );
}
