const request = require('request');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var weather = request('http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&appid=083a831096c9e0c9c8d08c5c2c374a41', { json: true }, (err, res, body) => {
  if (err) return console.log(err);
  console.log(body.main)
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let weather2 = JSON.stringify(weather)
  res.end(weather2);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});