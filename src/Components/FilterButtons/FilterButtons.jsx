import React, { useState } from 'react';
import './FilterButtons.css';

const FilterButtons = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
    onFilterChange(filterType);
  };

  return (
    <div className="Mk-filterButtons">
      <button
        className={`Mk-filterBtn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterClick('all')}
      >
        Show All
      </button>
      <button
        className={`Mk-filterBtn ${activeFilter === 'appartment' ? 'active' : ''}`}
        onClick={() => handleFilterClick('appartment')}
      >
        Apartments
      </button>
      <button
        className={`Mk-filterBtn ${activeFilter === 'villa' ? 'active' : ''}`}
        onClick={() => handleFilterClick('villa')}
      >
        Villa House
      </button>
      <button
        className={`Mk-filterBtn ${activeFilter === 'penthouse' ? 'active' : ''}`}
        onClick={() => handleFilterClick('penthouse')}
      >
        Penthouses
      </button>
    </div>
  );
};

export default FilterButtons;
