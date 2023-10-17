import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';
import logo from '../../assets/yummy-logo.png'
import { thunkGetRestaurants } from '../../store/restaurants';
import { useParams } from 'react-router-dom';
import { thunkGetMenuItems } from '../../store/menuItems';

function Navigation({ isLoaded, searchType }){
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const { restaurantId } = useParams();
  const getRestaurants = useSelector((state) => state.restaurant.allRestaurants);
	const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
	const menuItems = Object.values(getMenuItems);
  const restaurants = Object.values(getRestaurants);

  useEffect(() => {
		if(window.location.pathname==='/')
    dispatch(thunkGetRestaurants());
		if(restaurantId){
			dispatch(thunkGetMenuItems(restaurantId));
		}
  }, [dispatch]);

  if (!restaurants.length) return null;

	return (
		<ul id ="header">
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			<li>
				<NavLink exact to="/">
					<img id="logo-image" src= {logo}alt="Logo"/>
				</NavLink>
			</li>
			<li className='nav-bar-search-bar'>
				{ searchType==='restaurants' && (
					<SearchBar
						placeholder={'Search for your favorite restaurant by name'}
						data={restaurants}
						searchType={searchType}/>
				)}
				{ searchType==='menu-items' && (
					<SearchBar
						placeholder={'Search for a menu item by name'}
						data={menuItems}
						searchType={searchType}/>
				)}
			</li>
		</ul>
	);
}

export default Navigation;
