import React, { useState } from 'react';
import TravelForm from './components/TravelForm';
import './App.css';

function App() {
  const [travels, setTravels] = useState([
    { id: 1, country: 'Франция', title: 'Парижские каникулы', description: 'Эйфелева башня, Лувр и круассаны', likes: 12 },
    { id: 2, country: 'Италия', title: 'Римские каникулы', description: 'Колизей, Ватикан и пицца', likes: 8 },
    { id: 3, country: 'Япония', title: 'Токийские приключения', description: 'Сакура, суши и неоновый Токио', likes: 15 },
    { id: 4, country: 'Таиланд', title: 'Пхукет-рай', description: 'Белые пляжи и кокосы', likes: 7 },
  ]);

  const [selectedCountry, setSelectedCountry] = useState('all');

  // Функция добавления нового путешествия
  const handleAddTravel = (newTravel) => {
    const travel = {
      ...newTravel,
      id: Date.now(),
      likes: 0
    };
    setTravels([...travels, travel]);
  };

  const countries = [...new Set(travels.map(t => t.country))].sort();

  const filteredTravels = selectedCountry === 'all' 
    ? travels 
    : travels.filter(t => t.country === selectedCountry);

  const handleLike = (id) => {
    setTravels(travels.map(travel => 
      travel.id === id ? { ...travel, likes: travel.likes + 1 } : travel
    ));
  };

  const totalLikes = travels.reduce((sum, t) => sum + t.likes, 0);

  return (
    <div className="app">
      <h1>🌍 Каталог путешествий</h1>
      
      {/* ФОРМА ДОБАВЛЕНИЯ — теперь она здесь! */}
      <TravelForm onAdd={handleAddTravel} />
      
      <div className="filter">
        <label>Фильтр по стране: </label>
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="all">Все страны</option>
          {countries.map(country => <option key={country}>{country}</option>)}
        </select>
      </div>

      <div className="travels-grid">
        {filteredTravels.map(travel => (
          <div key={travel.id} className="travel-card">
            <h3>{travel.title}</h3>
            <span className="country">{travel.country}</span>
            <p>{travel.description}</p>
            <button onClick={() => handleLike(travel.id)}>❤️ {travel.likes}</button>
          </div>
        ))}
      </div>

      <div className="stats">
        <p>Всего путешествий: {travels.length}</p>
        <p>Всего лайков: {totalLikes}</p>
      </div>
    </div>
  );
}

export default App;