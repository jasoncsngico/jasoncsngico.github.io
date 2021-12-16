const fs = require('fs');

const express = require('express');
const app = express();

app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /");
});

app.get('/.well-known/assetlinks.json', (req, res, next) => {
    res.status(200).sendFile(__dirname +'/assets.json');
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).sendFile(__dirname +'/index.html');
});

const http = require('http');
const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});