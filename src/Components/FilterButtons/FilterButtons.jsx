
import './FilterButtons.css'

const FilterButtons = ({ onFilterChange }) =>  {
    return (
      <div className="Mk-filterButtons">
        <button className="Mk-filterBtn" onClick={() => onFilterChange("all")}>Show All</button>
        <button className="Mk-filterBtn" onClick={() => onFilterChange("appartment")}>Apartments</button>
        <button className="Mk-filterBtn" onClick={() => onFilterChange("villa")}>Villa House</button>
        <button className="Mk-filterBtn" onClick={() => onFilterChange("penthouse")}>Penthouses</button>
        {console.log(onFilterChange)}
      </div>
    );
  };

export default FilterButtons