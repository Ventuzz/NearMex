import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './SearchBar.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import lugares from '../data/lugares';

// Icono por defecto de Leaflet para que se vea bien
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const categorias = [
  { name: 'Cafés', icon: '☕' },
  { name: 'Restaurantes', icon: '🍽️' },
  { name: 'Museos', icon: '🏛️' },
  { name: 'Centros Comerciales', icon: '🏬' },
];

const SearchBar = () => {
  return (
    <div className="search-section">
      <div className="glass-container">
        <div className="input-group">
          <span className="search-icon"></span>
          <input type="text" placeholder="Busca lugares en Guadalajara..." />
          <button className="search-btn">🔍</button>
        </div>
        <div className="categories">
          {categorias.map((cat) => (
            <button
              key={cat.name}
              className="category-pill"
              onClick={() => alert(`Filtrando por ${cat.name}`)}
            >
              <span className="pill-icon">{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas de lugares */}
      {lugares.map((lugar) => (
      <Link key = {lugar.id}to = {`/lugares/${lugar.id}`} style = {{textDecoration: "none", color: "black"}}>
        <div className = "cards-container">
          <img src = {lugar.img} alt = {lugar.nombre} />
        </div>
      </Link>
      ))}


      {/* Mapa */}
      <div className="map-container">
        <MapContainer
          center={[20.6597, -103.3496]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '400px', width: '100%', borderRadius: '20px' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {lugares.map((lugar) => (
            <Marker key={lugar.nombre} position={[lugar.lat, lugar.lng]}>
              <Popup>
                {lugar.nombre} <br /> {lugar.tipo}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};


export default SearchBar;
