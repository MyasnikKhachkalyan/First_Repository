'use strict';

const http = require('http');
const {newF, upper, port} = require('./ports');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader('content-type',
                  'text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1>${upper(__dirname)}</h1>
        <h3>${newF("THIS IS NEW FUNCTON")}</h3>
        <p> what a body =P </p>
      </body>
      `)
  } else{ }
})

server.on('connection', socket => {
  console.log("Someone connected", socket);
})
server.listen(port, () => console.log(`listened to ${port}`));
