var os = require('os');
var time = require('./setTime');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    time.printTime(uptime);
    var userInfo = os.userInfo();
    console.log('System: '.grey, type);
    console.log('Release: '.red, release);
    console.log('CPU model: '.cyan, cpu);
    console.log('Uptime: ~'.magenta, time.printTime(uptime));
    console.log('User name: '.green, userInfo.username);
    console.log('Home dir: '.blue, userInfo.homedir);
}

exports.print = getOSinfo;
