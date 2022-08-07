const fs = require('fs');

const data = JSON.parse(fs.readFileSync(__dirname + '/data.json'));
const userData = JSON.parse(fs.readFileSync(__dirname + '/users.json'));

const resTable = document.querySelector('#res-table');

console.log(resTable);