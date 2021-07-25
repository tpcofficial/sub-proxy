const proxy = require('http-proxy');
const https = require('https');
const config = require('../loader.js');

//
// Create the proxy server listening on port 443
//
/*
proxy.createServer({
    ssl: {
        key: fs.readFileSync('valid-ssl-key.pem', 'utf8'),
        cert: fs.readFileSync('valid-ssl-cert.pem', 'utf8')
    },
    target: 'http://localhost:9010',
    secure: true // Depends on your needs, could be false.
}).listen(443);*/

const domainParser = (req) => {

};

https.createServer(config.ssl, (req, res) => {
    req.on('error', (err) => {
        console.error(String(err.message));
    });
    setTimeout(function () {
        proxy.web(req, res, {
            target: domainParser(req)
        });
    }, 5);
}).listen(loader.port);