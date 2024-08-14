const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // This is needed to parse JSON bodies in POST requests

app.get("/", (req, res) => res.type('html').send(`<!DOCTYPE html><p>Hello There</p></html>`));

app.get('/ping', (req, res) => {
    res.status(200).json({ message:'Server responded well',status: 'ok' });
});

// Handle the calculation request
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    // Ensure the numbers are valid
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ message: 'Invalid input. num1 and num2 must be numbers.' });
    }

    // Perform the calculation (e.g., add the numbers)
    const result = num1 + num2;

    // Send back the result
    res.status(200).json({ result });
});

app.listen(port, ()=> console.log(`listening on ${port}`));