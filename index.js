const fs = require('fs');

const express = require('express');
const app = express();

app.use('/robots.txt', function (req, res, next) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /");
});

app.get('/.well-known/assetlinks.json', (req, res, next) => {
    res.status(200).json({
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "com.winghang.hk.uat",
          "sha256_cert_fingerprints":
          ["F0:E2:27:0C:A9:55:DE:C5:40:73:6A:44:64:AD:B8:95:59:E0:4C:76:21:6A:F8:FF:31:4B:46:9A:3B:75:A3:69"]
        }
    });
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