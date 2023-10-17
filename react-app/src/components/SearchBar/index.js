import React, {useState} from 'react'
import './SearchBar.css'
import { useHistory } from 'react-router';

const SearchBar = ({ placeholder, data, searchType}) => {
const history = useHistory();
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const clearInput = () => {
  setFilteredData([]);
  setWordEntered("");
}

const toRestaurants = (id) => {
  history.push(`/restaurants/${id}`);
  clearInput();
};

const toMenuItems = (id) => {
  history.push(`/menuitems/${id}`);
  clearInput();
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
        {filteredData.map((data) => {
          let price = data.price;
          let templatePrice = [];
          for (let i = 0; i < price; i++){
            templatePrice.push('$');
          }
          return (
            <div>
              {searchType === 'restaurants' && (
                <div className='search-bar-result' onClick={() => toRestaurants(data.id)}>
                  <div className='search-bar-result-img-container'>
                    <img className='search-bar-result-img' src={data.image_url}></img>
                  </div>
                  <div className='search-bar-result-info-container'>
                    <div>
                      {data.name} ({data.address})
                    </div>
                    <div>{templatePrice.join("")} &#183; {data.type}</div>
                  </div>
                </div>
              )}
              {searchType === 'menu-items' && (
                <div className='search-bar-result' onClick={() => toMenuItems(data.id)}>
                  <div className='search-bar-result-img-container'>
                    <img className='search-bar-result-img' src={data.imageUrl}></img>
                  </div>
                  <div className='search-bar-result-info-container'>
                    <div>
                      {data.name} (${data.price})
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    }
  </div>
)};

export default SearchBar;
