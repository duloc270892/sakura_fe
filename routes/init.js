// const fileIndex = 'index';
const fileIndex = 'maintenance';

function getSubdomain(h) {
    var parts = h.split(".");
    if (parts.length == 2) return "www";
    return parts[0];
};

module.exports = function(app) {
    var functions = require('../functions');
    app.get('*', function(req, res) {
        var objStatus = functions.checkStatusMaintaince();
        var fileIndex = 'index';
        functions.resView(req, res, fileIndex, objStatus)
    });
}