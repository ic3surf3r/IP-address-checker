import { useContext, useEffect } from "react";
import IPContext from "../context/ipContext";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { getIPData } from "../functions/ipData";

function Map() {
  const { state, dispatch } = useContext(IPContext);
  const { latitude, longitude } = state || { latitude: 0, longitude: 0 };

  useEffect(() => {
    getIPData(null, dispatch);
  }, []);

  const customIcon = new Icon({
    iconUrl: locationIcon,
  });

  return (
    <div className="w-full h-2/3 z-0" id="map">
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
