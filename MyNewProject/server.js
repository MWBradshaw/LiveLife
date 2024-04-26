const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0245Kalia!',
    database: 'Livelife'
});

db.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the LiveLife API!');
});

// Define a route to fetch user data
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM Users', (err, results) => {
        if (err) {
            console.error('Error fetching users from database:', err);
            res.status(500).send('Error fetching users from database');
            return;
        }
        res.json(results);
    });
});

// Dummy endpoint for payment processing
app.post('/process-payment', (req, res) => {
    // Simulate payment processing by sleeping for a bit (just for effect, typically not done in production)
    setTimeout(() => {
        // Dummy response data
        const response = {
            user: {
                UserName: 'John Doe',
                UserId: req.body.userId || 1 // Take from request or default
            },
            orders: [
                {
                    OrderID: 'order123',
                    ShippingAddress: '123 Main St'
                }
            ],
            items: [
                {
                    OrderID: 'order123',
                    ItemID: 'item456',
                    ItemName: 'Cool T-shirt',
                    Quantity: 1
                }
            ]
        };

        res.json(response);
    }, 1000); // Wait 1 second to simulate processing time
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
