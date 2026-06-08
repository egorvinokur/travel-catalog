import React, { useState } from 'react';

const TravelForm = ({ onAdd }) => {
  const [country, setCountry] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country && title && description) {
      onAdd({ country, title, description });
      setCountry('');
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="travel-form">
      <h3>✈️ Добавить новое путешествие</h3>
      
      <input
        type="text"
        placeholder="Страна"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      
      <textarea
        placeholder="Краткое описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        required
      />
      
      <button type="submit">+ Добавить путешествие</button>
    </form>
  );
};

export default TravelForm;