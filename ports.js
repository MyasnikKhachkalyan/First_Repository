'use strict';

const upper = (str) => {
  return str.toUpperCase();
}

const newF = (nf) => {
  return nf.toLowerCase();
}

const port = 8080;

module.exports = {
  upper, newF, port
}
