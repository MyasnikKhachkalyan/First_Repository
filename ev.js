'use strict';
//
// let counter = 0;
//
// const interval = setInterval(function(){
//   console.log(`called ${++counter} times`);
//   if (counter === 5) {
//     clearInterval(interval);
//   }
//
// },300);

// process.stdin.on('data',function(d){
//   console.log(d.toString());
// })

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader('content-type',
                  'text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1>some header! </h1>
        <p> what a body =P </p>
      </body>
      `)
  } else{ res.end('UNKNOWN')}
})

server.listen(8080, () => console.log("listened to 8080"));
