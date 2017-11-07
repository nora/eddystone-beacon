var eb = require('eddystone-beacon');
var url = "https://goo.gl/bdEL67";
var options = {
  name: 'Beacon',    // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};

eb.advertiseUrl(url, options);

console.log('eddystone-beacon is working.');