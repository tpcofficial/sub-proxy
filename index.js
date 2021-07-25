const proxy = require('http-proxy');
const https = require('https');
const config = require('../loader.js');

//domain parser
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