import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './SearchBar.css';
import L from 'leaflet';

// Icono por defecto de Leaflet para que se vea bien
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const lugares = [
  {
    nombre: "Le Gouter Café Boutique",
    tipo: "Café",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQqPf_vCJg7j26Jy-2VbrdmxSDU5eSEu4zA&s",
    lat: 20.63834,
    lng: -103.31702,
  },
  {
    nombre: "La Tequila Cocina de México",
    tipo: "Restaurante",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP-VT0K70-yis8SDh-M34bg8WREw01dtKgw&s",
    lat: 20.68017,
    lng: -103.38818,
  },
  {
    nombre: "Museo Regional de Guadalajara",
    tipo: "Museo",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/17/80/40/cartoline-da-guadalajara.jpg?h=400&s=1&w=700",
    lat: 20.67781,
    lng: -103.34640,
  },
  {
    nombre: "Plaza Patria",
    tipo: "Centro Comercial",
    img: "https://www.informador.mx/export/sites/elinformador/img/2023/06/14/31-img_1863.jpg_466555353.jpg",
    lat: 20.7118,
    lng: -103.3750,
  },
];

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
      <div className="cards-container">
        {lugares.map((lugar) => (
          <div key={lugar.nombre} className="card">
            <img src={lugar.img} alt={lugar.nombre} />
            <h3>{lugar.nombre}</h3>
            <p>{lugar.tipo}</p>
          </div>
        ))}
      </div>

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
