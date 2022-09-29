// Inporting node JS core modules (file system)
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Habibullah Z. ')
// fs.appendFileSync('notes.txt', ' Associate software Engineer')

////Importing your own files

// const name11 = require('./utils.js')

// console.log(name11);

var content = require("superheroes")

var supwervillains = require('supervillains')
var villain = supwervillains.random()
var name = content.random();
console.log(name);
console.log(villain)