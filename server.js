var express = require('express');
var Path = require('path');
var fs = require('fs');
var cors = require('cors');
require('colors');

var platform = 'web';
var port = ('production' == process.env.NODE_ENV) ? process.env.PORT : 3015;
var hostname = 'localhost';
var debug = true;
var dir = ('production' == process.env.NODE_ENV) ? process.env.HOME : '.';

runServer({
    dir: dir,
    debug: debug,
    port: port,
    hostname: hostname
});

function runServer(opts) {
    var server = express();

    server.set('port', opts.port);
    server.set('hostname', opts.hostname || 'localhost');
    server.use(cors());

    var staticPaths = opts.staticPaths || [
        '/assets/shared',
        '/assets',
        '/web_modules',
        '/node_modules/reapp-ui/assets'
    ];

    staticPaths.forEach(function(path) {
        server.use('/assets', express.static(opts.dir + path));
    });

    server.use(express.static('./build/' + platform));

    console.log(
        'Your app is running on http://%s:%s'.green.bold,
        server.get('hostname'),
        server.get('port')
    );

    server.listen(
        server.get('port')
    );
}
