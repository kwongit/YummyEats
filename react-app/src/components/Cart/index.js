import React, { useContext } from 'react'
import { RestaurantContext } from '../../context/Restaurant-context'
import { useSelector } from "react-redux";
import { CartItem } from './CartItem';

export const Cart = () => {
    const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
    const restaurant = useSelector((state) => state.restaurant.singleRestaurant);
    const menuItems = Object.values(getMenuItems);
    const {cartItems} = useContext(RestaurantContext)

    return (
        <div>
            <div className='cart-container'>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cart-items-container'>
{menuItems.map((menuItem) =>{
    if(cartItems[menuItem.id] !== 0) {
        return < CartItem key={menuItem.id} data={menuItem}/>
    }
})}
            </div>
        </div>
    )
}
