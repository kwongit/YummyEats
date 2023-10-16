import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';
import logo from '../../assets/yummy-logo.png'
import { thunkGetRestaurants } from '../../store/restaurants';

function Navigation({ isLoaded }){
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
  const getRestaurants = useSelector(
    (state) => state.restaurant.allRestaurants
  );

  const restaurants = Object.values(getRestaurants);

  useEffect(() => {
    dispatch(thunkGetRestaurants());
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
			<li>
				<SearchBar
					placeholder={'Search for your favorite restaurant'}
					data={restaurants}/>
			</li>
		</ul>
	);
}

export default Navigation;
