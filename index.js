const request = require('request');
const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

var tmp_json = {};
var data = [];

var weather = request('http://api.openweathermap.org/data/2.5/forecast?q=Dublin,ie&appid=083a831096c9e0c9c8d08c5c2c374a41', { json: true }, (err, res, body) => {
  if (err) return console.log(err);
  const listOfHours = body.list
  let i=0;
  for (hours in listOfHours){
    while(i < 5){
     data.push(listOfHours[i].main.temp)
    i++
    }
  }
  fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
});

fs.readFile('data.json', data, (err) => {
  if (err) throw err;
  console.log(data)
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});