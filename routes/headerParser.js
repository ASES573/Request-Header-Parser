var express = require('express');

var headerParser = express.Router();

var ip = require('ip');
 
headerParser.get('/', function(request, response) {
    
    var sysData = {};
    
    sysData.ipaddress =ip.address();

    console.log(request.headers);
    
    sysData.language =request.headers["accept-language"].split(',')[0];
    
    sysData.software = request.headers["user-agent"].split('(')[1].split(')')[0];

    response.set('Content-Type', 'application/json');
    
    response.send(JSON.stringify(sysData));
});

module.exports = headerParser;



