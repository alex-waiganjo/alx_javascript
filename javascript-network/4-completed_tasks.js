// #!/usr/bin/node

const req = require('request');

const url = process.argv[2];

req(url, (error, response, body) => {
  const task = JSON.parse(body);
  const store_items = {};
  for (const check_complete of task) {
    if (check_complete.completed) {
      if (!store_items[check_complete.userId]) {
        store_items[check_complete.userId] = 0;
      }
      store_items[check_complete.userId]++;
    }
  }
  console.log(store_items);
});
