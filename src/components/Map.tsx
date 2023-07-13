import { useContext, useEffect, useRef } from "react";
import IPContext from "../context/ipContext";
import { Icon, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
  const value = useContext(IPContext);
  const { data } = value;

  const markerRef = useRef<LeafletMarker>(null);

  const { latitude, longitude } = data;
  const lat: number = Number(latitude.toFixed(3));
  const lng: number = Number(longitude.toFixed(3));

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
      console.log(lat, lng);
    }
  }, [latitude, longitude]);

  const customIcon = new Icon({
    iconUrl: locationIcon,
  });

  return (
    <div className="w-full h-2/3 z-0" id="map">
      <MapContainer
        center={[0, 0]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
        />

        <Marker position={[0, 0]} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
