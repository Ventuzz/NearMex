import React from "react";
import "./LocationsSection.css";

const locations = [
  // Cafés
  { name: "Plaza Patria", type: "Centro Comercial", city: "Guadalajara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaZEXwNpTr3yrTUI2lO6985Z12cK8uaNnvg&s" },
  { name: "Neretta Café & Gelato", type: "Café", city: "Guadalajara", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/88/73/a2/mi-cafeteria-en-la-colonia.jpg" },
  
  // Restaurantes
  { name: "Café San Pedro", type: "Restaurante", city: "Guadalajara", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f0/9f/0e/img-20190324-144506-largejpg.jpg?h=600&s=1&w=600" },
  
  // Centros Comerciales
  { name: "Plaza Andares", type: "Centro Comercial", city: "Guadalajara", image: "https://afar.brightspotcdn.com/dims4/default/e9d1591/2147483647/strip/true/crop/3000x1592%2B0%2B290/resize/1440x764%21/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fa9%2F39%2F90d374644792b929bd8dcfae2f3c%2Ftravelguides-guadalajara-luisalvarado-shutterstock.jpg" },
];

const LocationsSection = () => {
  return (
    <div className="locations-section">
      <h2>Descubre lugares en Guadalajara</h2>
      <div className="locations-grid">
        {locations.map((loc) => (
          <div key={loc.name} className="location-card">
            <img src={loc.image} alt={loc.name} />
            <div className="location-info">
              <h3>{loc.name}</h3>
              <p>{loc.type} - {loc.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
