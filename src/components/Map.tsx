import { useContext, useEffect, useState } from "react";
import IPContext from "../context/ipContext";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationIcon from "../assets/icon-location.svg";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

function Map() {
  const [center, setCenter] = useState([0, 0]);
  const value = useContext(IPContext);
  const { data } = value;

  const { latitude, longitude } = data;

  useEffect(() => {
    const newCenter: [number, number] = [latitude, longitude];
    setCenter(newCenter);
  }, [value, setCenter]);

  const customIcon = new Icon({
    iconUrl: locationIcon,
  });

  const MapPanTo: React.FC = () => {
    const map = useMap();

    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center, map]);

    return null;
  };

  return (
    <div className="w-full h-2/3 z-0" id="map">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%" }}
      >
        <MapPanTo />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors'
        />

        <Marker position={center} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
