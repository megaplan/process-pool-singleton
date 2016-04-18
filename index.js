var ProcessPool = require("process-pool");
var os = require("os");

module.exports = new ProcessPool({processLimit: os.cpus().length});
