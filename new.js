'use strict';

const net = require('net');
const sock = new net.Socket;

const func = (datas) => {
  const smth = datas.split('\r\n\r\n');

  const head = smth[0].split('\r\n');
  const bod = smth[1];

  const smthelse = {
    header: head,
    body: bod
  }

  console.log(smthelse);

}

sock.on('connect', () => {
  sock.write('GET /en/ HTTP/1.1 \r\n');

  sock.write('Host: istc.am');
  sock.write('\r\n\r\n');
});

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

sock.on('end',() => {
      const spl = total_data.reduce((prev, total) => prev + total)

      func(spl);

          });
sock.connect({
  port: 80,
  host: 'istc.am'
});
