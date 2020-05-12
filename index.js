const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer((req, resp) => {
    resp.writeHead(200, {"Content-Type": 'text/html'})
    let weatherData = http.get('http://api.openweathermap.org/data/2.5/forecast?q=Dublin&appid=083a831096c9e0c9c8d08c5c2c374a41')
    fs.readFile("index.html", (error, data) => {
    if(error){
        resp.writeHead(404)
        resp.write(weatherData)
    }
    else {
        resp.write(data)
    }
    resp.end()
    })
})

server.listen(port, (error) => {
    if (error){
        console.log("Error : ", error)  
    } 
    else console.log("Server listening on port ", port)
    }
)

// let weatherData = https.get('https://api.openweathermap.org/data/2.5/forecast?q=Dublin&appid=083a831096c9e0c9c8d08c5c2c374a41',(res) => {
//     res.on('data', (d) => {
//         process.stdout.write(d);
//       });
// })

// let weatherRequest = (request, reponse)  => {
//     request = 
//     reponse.write(request.body);

// }