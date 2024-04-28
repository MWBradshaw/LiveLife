import React, { useEffect, useState } from 'react';

function OrderItems() {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/orderitems')
            .then(response => response.json())
            .then(data => setOrderItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Order Items</h1>
            <ul>
                {orderItems.map(item => (
                    <li key={item.ItemID}>
                        {item.ItemName} - Quantity: {item.Quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderItems;
