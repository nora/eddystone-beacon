//require
var eb = require('eddystone-beacon');

//URL
const url = "https://goo.gl/bdEL67";
//Options
const options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

//set
eb.advertiseUrl(url, options);

console.log('eddystone-beacon is working.');