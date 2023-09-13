#!/usr/bin/node
const req = require('request')
const url = process.argv[2]
const file_path =process.argv[3]
const fs= require('fs')

req.get(url).pipe(fs.createWriteStream(file_path))