import React from 'react'
import "./CartItem.css"

export const CartItem = (props) => {

    const { id, name, price, imageUrl } = props.data
    return (

        <div>

            <div className="cart-item-tile-container" key={id} >
                <img
                    className="cart-item-tile-image"
                    src={imageUrl}
                    alt={name}
                    title={name}
                ></img>
                <div className="cart-item-tile-info">
                    <div className="cart-item-small-name">{name}</div>
                    <div className="cart-item-small-info">
                        ${price}

                    </div>
                </div>
            </div>



        </div>
    )
}
