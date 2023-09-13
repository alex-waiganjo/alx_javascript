#!/usr/bin/node
const req = require('request')
const url = process.argv[2]
const fs= require('fs')

req.get(url).pipe(fs.createWriteStream('index.html'))