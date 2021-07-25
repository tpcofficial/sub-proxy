// read config file and convert to object
try {
    const configOriginal = JSON.parse(require("fs").readFileSync('./config.json','utf8'));
    module.exports = configOriginal;
} catch (err) { throw new Error("Failed to read or parse config, error given by JSON or fs:\n    "+err); }
