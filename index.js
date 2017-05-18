'use strict';


const newF = function(arr){
  const narr = [];
  for(const i of arr){
    narr.push(i.toUpperCase());
  }
  console.log(i);
  return narr;
}
const res = newF(['foo', 'bar', 'baz']);
console.log(res);
