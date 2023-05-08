import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 21.027763,
  lng: 105.83416,
};

function Map({ coords }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
  });

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map)
  // }, [])
  // const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  // }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coords}
      zoom={18}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker position={coords} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
