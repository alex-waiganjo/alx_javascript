#!/usr/bin/node
const req = require('request');

const url = process.argv[2];
const Id = 18;
req.get(url, function (error, response, body) {
  const obj = JSON.parse(body).results;
  const films = obj.filter((film) => {
    const char_Id = film.characters.map((Url) =>
      parseInt(Url.split('/').slice(-2, -1)[0]),
    );
    return char_Id.includes(Id);
  });

  const items = films.length;
  console.log(items);
});
