import React, {useState} from 'react'
import './SearchBar.css'
import { useHistory } from 'react-router-dom';

const SearchBar = ({ placeholder, data}) => {
const history = useHistory();
const [filteredData, setFilteredData] = useState([]);

const handleClick = (id) => {
  history.push(`/restaurants/${id}`);
};

const handleFilter = (e) => {
  const searchWord = e.target.value.toLowerCase();
  const newData = data.filter((value) => {
    return value.name.toLowerCase().includes(searchWord);
  })
  setFilteredData(newData);
}

return (
  <div className='search'>
    <div className='searchInputs'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={handleFilter}
        >
      </input>
      <div className='searchIcon'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    {filteredData.length !== 0 &&
      <div className='dataResult'>
        {filteredData.map((restaurant, key) => {
          return <div className='dataItem' onClick={() => handleClick(restaurant.id)}>
            <div>{restaurant.name}</div>
          </div>
        })}
      </div>
    }
  </div>
)};

export default SearchBar;
