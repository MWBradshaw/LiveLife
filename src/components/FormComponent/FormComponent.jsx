import React, { useState } from 'react';

function FormComponent() {
    const [inputData, setInputData] = useState(''); // State to hold input data

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the page from reloading on submit

        // Here you would replace 'http://your-api-endpoint' with your actual endpoint
        const response = await fetch('http://localhost:3001/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: inputData }) // Convert the React state to a JSON string
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Log the response data
            // Handle actions after successful fetch, e.g., showing a success message, redirecting, etc.
        } else {
            console.error('Failed to submit the form'); // Error handling
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
                placeholder="Enter some data"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;
