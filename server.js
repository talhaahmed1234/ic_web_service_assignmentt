const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Reverse String API
app.post('/api/reverse', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'No text provided' });
    }
    const reversedText = text.split('').reverse().join('');
    res.json({ result: reversedText });
});

// Square Number API
app.post('/api/square', (req, res) => {
    const { number } = req.body;
    if (number === undefined) {
        return res.status(400).json({ error: 'No number provided' });
    }
    const squaredNumber = number * number;
    res.json({ result: squaredNumber });
});

// Serve static files (like index.html)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
