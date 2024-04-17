import React from 'react';
import './Cart.css';

const Cart = () => {
    return(
        <div id="cart-page-container">
            <div id="cart-container">
                <div id="cart-container-header">
                    <p>Shopping Cart</p>
                    <div id="cart-header">
                        <p>Deselect all items</p>
                        <p>Price</p>
                    </div>
                </div>

                <div className="cart-body">
                    <div>
                        <img src="" />

                        <div className="cart-item-name-container">
                            <p>Skechers Men's Summits High Range Hands Free Slip-in Sneaker</p>
                        </div>
                    </div>
                    <p>$300.00</p>
                </div>
            </div>

            <div>
                <div id="checkout-container">
                    <p>Total Price[20 items]: $300.00</p>
                    <button id="checkout-button">Proceed to checkout</button>
                </div>

                <div id="recommended-container">
                    <div>

                    </div>

                    <div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart;