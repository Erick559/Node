const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.type('html').send(`<!DOCTYPE html><p>Hello There</p></html>`));

app.get('/ping', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(port, ()=> console.log(`listening on ${port}`));