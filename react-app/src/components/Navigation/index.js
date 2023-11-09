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
import { useContext } from 'react'
import { RestaurantContext } from '../../context/Restaurant-context'

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const { cartItems } = useContext(RestaurantContext)
	const cartItemsValues = Object.values(cartItems);
	// const { restaurantId } = useParams();
	// const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
	// const menuItems = Object.values(getMenuItems);
	// const getRestaurants = useSelector((state) => state.restaurant.allRestaurants);
	// const restaurants = Object.values(getRestaurants);

	// useEffect(() => {
	// 	if(window.location.pathname==='/')
	//   dispatch(thunkGetRestaurants());
	// 	if(restaurantId){
	// 		dispatch(thunkGetMenuItems(restaurantId));
	// 	}
	// }, [dispatch]);

	// if (!restaurants.length) return null;
	console.log('cartItemsValues ====77777>>>>>', cartItemsValues)
	return (

		<ul id="header">
			<div id="sub-header-container">
				{isLoaded && (

					<li>
						<ProfileButton user={sessionUser} />
					</li>
				)}
				<li>
					<NavLink exact to="/">
						<img id="logo-image" src={logo} alt="Logo" />
					</NavLink>
				</li>
			</div>
			<div>
				

				{/* <NavLink exact to="/emptyCart">
								<i className="fa-solid fa-cart-shopping shop-cart-icon"></i>
							</NavLink> */}

				{/* <NavLink exact to="/cart">
				<i className="fa-solid fa-cart-shopping shop-cart-icon"></i>
				</NavLink> */}

				{cartItemsValues.length === 0 ?

					<NavLink exact to="/emptyCart">
						<i className="fa-solid fa-cart-shopping shop-cart-icon"></i>
					</NavLink>
					:

					<NavLink exact to="/cart">
						<i className="fa-solid fa-cart-shopping shop-cart-icon"></i>
					</NavLink>
				}


			</div>

		</ul>
	);
}

export default Navigation;
