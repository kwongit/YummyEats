import React, {useState} from 'react'
import './SearchBar.css'
import { useHistory } from 'react-router';

const SearchBar = ({ placeholder, data}) => {
const history = useHistory();
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleClick = (id) => {
  history.push(`/restaurants/${id}`);
  setFilteredData([]);
  setWordEntered("");
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
      <div className='search-bar-icon'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        type='text'
        value={wordEntered}
        className='search-bar'
        placeholder={placeholder}
        onChange={handleResults}
        >
      </input>
      <div className='search-bar-icon'>
        {wordEntered.length !== 0 && <i onClick={clearInput} id='search-clear-button' className="fa-solid fa-x"></i>}
      </div>
    </div>
    {filteredData.length !== 0 &&
      <div className='search-bar-results'>
        {filteredData.map((restaurant) => {
          let price = restaurant.price;
          let templatePrice = [];
          for (let i = 0; i < price; i++){
            templatePrice.push('$');
          }
          return <div className='search-bar-result' onClick={() => handleClick(restaurant.id)}>
            <div className='search-bar-result-img-container'>
              <img className='search-bar-result-img' src={restaurant.image_url}></img>
            </div>
            <div className='search-bar-result-info-container'>
              <div>
                {restaurant.name} ({restaurant.address})
              </div>
              <div>{templatePrice.join("")} &#183; {restaurant.type}</div>
            </div>
          </div>
        })}
      </div>
    }
  </div>
)};

export default SearchBar;
