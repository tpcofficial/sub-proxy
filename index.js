const proxy = require('http-proxy');
const https = require('https');
const config = require('../loader.js');

//domain parser logic
const domainParser = async (req) => {
    return new Promise((resolve, reject) => {
        const domainArray = String(req.headers.host).split(':')[0].split('.');
        resolve(String(`${domainArray[1]}.${domainArray[2]}.${config.domain_options.host_domain}:${domainArray[0]}`));
    });
};

https.createServer(config.ssl, async (req, res) => {
    req.on('error', (err) => {
        console.error(String(err.message));
    });
    setTimeout(async function () {
        proxy.web(req, res, {
            target: await domainParser(req)
        });
    }, 5);
}).listen(loader.port);