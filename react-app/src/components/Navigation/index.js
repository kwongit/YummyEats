import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/yummy-logo.png'
function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

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
		</ul>
	);
}

export default Navigation;
