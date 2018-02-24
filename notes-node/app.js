console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Aditya', 1, 'Aditya', 1, 2, 3, 4]);

console.log(filteredArray);
//var res = notes.addNote();
// console.log('Result: ',notes.add(3,4));
// var user = os.userInfo();


// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
