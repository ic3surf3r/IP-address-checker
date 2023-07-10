import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
  const lati: number = 52.51;
  const long: number = 13.38;

  const customIcon = new Icon({
    iconUrl: locationIcon,
  });

  return (
    <div className="w-full h-2/3 z-0" id="map">
      <MapContainer
        center={[lati, long]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
        />
        <Marker position={[lati, long]} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
