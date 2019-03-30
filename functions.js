module.exports = {
    checkStatusMaintaince: function() {
        const fs = require('fs');
        const moment = require('moment');
        var isMaintaince = false;
        const now = moment().format('YYYY-MM-DD HH:mm:ss Z');
        var fromDate = null;
        var toDate = null
        try {
            const rawSetting = fs.readFileSync(__dirname + '/setting.json');
            const setting = JSON.parse(rawSetting);
            const maintaince = setting ? setting.maintaince : {};
            const data = maintaince ? maintaince.data : {};
            if (data) {
                data.map(function(item, index) {
                    if (now >= moment(item.from, 'YYYY-MM-DD HH:mm:ss Z').format('YYYY-MM-DD HH:mm:ss Z') &&
                        now <= moment(item.to, 'YYYY-MM-DD HH:mm:ss Z').format('YYYY-MM-DD HH:mm:ss Z') &&
                        item.status) {
                        isMaintaince = true;
                        fromDate = item.from;
                        toDate = item.to;
                    }
                })
            }
        } catch (err) {
            isMaintaince = false
        }
        return { status: isMaintaince, from: fromDate, to: toDate };
    },
    resView: function(req, res, fileIndex, objStatus) {
        function getSubdomain(h) {
            var parts = h.split(".");
            if (parts.length == 2) return "www";
            return parts[0];
        };
        const moment = require('moment');

        const subDomain = getSubdomain(req.headers.host);
        var MobileDetect = require('mobile-detect');
        var md = new MobileDetect(req.headers['user-agent']);
        const query = req.query || {};
        const fromMode = (query && query.fromMode) ? query.fromMode : null;
        const host = req.headers.host;
        var origin = host;
        
        res.render(fileIndex, {
            locals: {
                moment: moment,
                objStatus: objStatus,
                title: origin.indexOf('localhost') != -1 ? '' : origin,
            }
        });
    }


}