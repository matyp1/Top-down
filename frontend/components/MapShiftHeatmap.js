import React from "react";

const FALLBACK_COORDINATES = Object.freeze({ lat: 0, lng: 0 });

const MapContainer = ({ center, zoom = 5, children }) => (
  <section
    className="mapshift-heatmap__map-container"
    data-center={JSON.stringify(center)}
    data-zoom={zoom}
  >
    {children}
  </section>
);

const MapShiftHeatmap = ({ payload }) => {
  const coordinates = payload?.coordinates;

  if (!coordinates || coordinates.lat == null || coordinates.lng == null) {
    return (
      <section className="mapshift-heatmap mapshift-heatmap--loading">
        <p className="mapshift-heatmap__loading-copy">
          Awaiting the Cartographers' latest coordinates…
        </p>
      </section>
    );
  }

  const lat = coordinates.lat ?? FALLBACK_COORDINATES.lat;
  const lng = coordinates.lng ?? FALLBACK_COORDINATES.lng;
  const center = [lat, lng];

  return (
    <section className="mapshift-heatmap">
      <MapContainer center={center} zoom={payload?.zoom ?? 5}>
        <div className="mapshift-heatmap__haze" aria-hidden="true" />
        <p className="mapshift-heatmap__trend-copy">
          {payload?.trendCopy ?? "Trend intel unavailable."}
        </p>
      </MapContainer>
    </section>
  );
};

export default MapShiftHeatmap;
