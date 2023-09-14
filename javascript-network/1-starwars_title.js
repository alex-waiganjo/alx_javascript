#!/usr/bin/node
const req = require('request');
// Input ID
const id = process.argv[2];

req.get(`https://swapi-api.alx-tools.com/api/films/${id}`,
    function (error, response, body) {
      const obj = JSON.parse(body);
      console.log(obj['title']);
    },
  ).on('error', (error) => {
    console.log(error);
  });
