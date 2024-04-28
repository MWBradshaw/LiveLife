import React from 'react';
import { useLocation } from 'react-router-dom';

function ThankYou() {
    const location = useLocation();
    const { user, orders, items } = location.state || {};

    return (
        <div>
            <h1>Thank You, {user?.UserName}!</h1>
            <h2>Your Orders:</h2>
            {orders?.map(order => (
                <div key={order.OrderID}>
                    <p>Order ID: {order.OrderID}, Shipping: {order.ShippingAddress}</p>
                    <ul>
                        {items?.filter(item => item.OrderID === order.OrderID).map(item => (
                            <li key={item.ItemID}>{item.ItemName} (Quantity: {item.Quantity})</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ThankYou;
