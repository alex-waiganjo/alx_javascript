#!/usr/bin/node

// Import the axios library
// const axios = require('request');
// const id =process.argv[2]
// const url = `https://swapi.dev/api/people/${id}`
// // Make an HTTP request
// axios.get(url,{encoding: 'utf-8'})
//   .on('data',response => {
//     console.log(JSON.parse(response));
//   })
const fs =require('fs')

const p = require('request')
const url = 'https://swapi.dev/api/films'
  // p.get('https://swapi.dev/api/films',function (error,response,body){
  //   const r =JSON.parse(body)
  //   r.results.forEach(element => {
  //     const t =element.title      
  //     // console.log(t)
  //   })})

p.get(url).pipe(fs.createWriteStream('output.json'))
