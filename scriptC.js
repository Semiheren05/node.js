const url = require('url');
const address = 'http://sadikturan.com/kurslar?year=2019&montj=nisan';
let result = url.parse(address, true);

console.log(result);
console.log(result.path);
console.log(result.query.year);
console.log(result.query.month);
// çalıştırmak için terminalde node scriptC.js  