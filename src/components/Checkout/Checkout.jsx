import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Checkout() {
    const [creditCard, setCreditCard] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    let navigate = useNavigate();  // Use the useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Credit Card Info:', { creditCard, expiryDate, cvv });
        // Here, you would handle form submission, possibly sending data to a server
        
        navigate('/thank-you');  // Navigate to the Thank You page after submission
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Credit Card Number:
                        <input
                            type="text"
                            value={creditCard}
                            onChange={(e) => setCreditCard(e.target.value)}
                            placeholder="1234 5678 9101 1121"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Expiry Date:
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        CVV:
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                        />
                    </label>
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default Checkout;
