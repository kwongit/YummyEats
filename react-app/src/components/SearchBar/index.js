import React, {useState} from 'react'
import './SearchBar.css'
import { useHistory } from 'react-router-dom';

const SearchBar = ({ placeholder, data}) => {
const history = useHistory();
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleClick = (id) => {
  history.push(`/restaurants/${id}`);
};

const handleResults = (e) => {
  const searchWord = e.target.value.toLowerCase();
  setWordEntered(searchWord);
  const newData = data.filter((value) => {
    return value.name.toLowerCase().includes(searchWord);
  })
  if(searchWord === ""){
    setFilteredData([]);
  } else {
    setFilteredData(newData);
  }
}

const clearInput = () => {
  setFilteredData([]);
  setWordEntered("");
}

return (
  <div className='search'>
    <div className='search-bar-container'>
      <input
        type='text'
        value={wordEntered}
        className='search-bar'
        placeholder={placeholder}
        onChange={handleResults}
        >
      </input>
      <div className='search-bar-icon'>
        {wordEntered.length === 0 ? <i class="fa-solid fa-magnifying-glass"></i> : <i onClick={clearInput} id='search-clear-button' class="fa-solid fa-x"></i>}
      </div>
    </div>
    {filteredData.length !== 0 &&
      <div className='search-bar-results'>
        {filteredData.map((restaurant, key) => {
          return <div className='search-bar-result' onClick={() => handleClick(restaurant.id)}>
            <div>{restaurant.name}</div>
          </div>
        })}
      </div>
    }
  </div>
)};

export default SearchBar;
