#!/usr/bin/node

const req = require('request');
// Input
const id = process.argv[2];
req.get(`https://swapi-api.alx-tools.com/api/films/${id}`,function(error,response,body){
}).forEach(element => {
    console.log(element.title)
  });