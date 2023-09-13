#!/usr/bin/node

const req = require('request');
// Input ID
const url = process.argv[2];
const characterId =18
req.get(url, function (error, response, body) {
  const obj = JSON.parse(body).results;
  const filmsWithWedgeAntilles = obj.filter((film) => {
    const characterIds = film.characters.map((characterUrl) =>
      parseInt(characterUrl.split('/').slice(-2, -1)[0]),
    );
    return characterIds.includes(characterId);
  });

  const count = filmsWithWedgeAntilles.length;
  console.log(count);
});
