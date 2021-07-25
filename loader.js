const _ = require("lodash");

try {
    const configOverrides = JSON.parse(require("fs").readFileSync('./config.overrides.json','utf8')),
        configOriginal = JSON.parse(require("fs").readFileSync('./config.defaults.json','utf8'));
    module.exports = _.merge(configOriginal, configOverrides);
} catch (err) { throw new Error("Failed to read or parse config, error given by JSON or fs:\n    "+err); }
