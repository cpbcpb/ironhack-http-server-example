// const http = require('http');
// const server = http.createServer((request, response)=>{
//     //this is a callback function.
//     response.write('Hello, world!');
//     response.end();
// });

const http = require('http');

const server =
  http.createServer((request, response) => {
//this is cool. says what was put in after .
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page not found');
      response.end();
    }
  });


//local host is a special domain name that always goes to your computer
//special ip address 127.0.0.1 is your computer.
//300 is the port of the connection
server.listen(3000);
