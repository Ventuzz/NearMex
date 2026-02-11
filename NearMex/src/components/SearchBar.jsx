import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const categories = [
    { name: 'Restaurantes', icon: '🍽️' },
    { name: 'Clubs', icon: '🎉' },
    { name: 'Museos', icon: '🏛️' }
  ];

  return (
    <div className="search-section">
      <div className="glass-container">
        <div className="input-group">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Busca tesoros locales..." />
          <button className="search-btn">🔍</button>
        </div>
        
        <div className="categories">
          {categories.map((cat) => (
            <button key={cat.name} className="category-pill">
              <span className="pill-icon">{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;