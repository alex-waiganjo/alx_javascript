#!/usr/bin/node
const req = require('request')
const fs= require('fs')

// Inputs
const url = process.argv[2]
const file_path =process.argv[3]

// writing to the specified file
req.get(url).pipe(fs.createWriteStream(file_path))