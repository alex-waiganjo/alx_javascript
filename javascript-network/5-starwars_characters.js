// #!/usr/bin/node
const req = require('request');
// Get ID
const id = process.argv[2];
// Url +Id
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

req.get(url, function (error, response, body) {
  const items = JSON.parse(body);
  const char = items['characters'];

//   Loop through the links and filter by name
  char.forEach((element) => {
    req.get(element, function (error, response, body) {
      const obj = JSON.parse(body);
      console.log(obj['name']);
    });
  });
});
