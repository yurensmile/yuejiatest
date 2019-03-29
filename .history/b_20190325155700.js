import { func } from "prop-types";

const s = new Set();
[2, 3,5 ,1, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
const set = new Set([1,23,4,55,4]);
[..set]

const items = new Set([1,2,34,2,1,4,4,4,]);
[...set]

items.size;

[...new Set('aaaaa')].join('');
let set = new Set();
let a = NaN;
const properties = {
  'width': 1,
  'height': 1
};
if(properties[someName]){

}
const properties = new Set();
properties.add('width');
properties.add('height');

if(properties.has(someName)){

}

const items = new Set([1,2,3,4,5]);
const array = Array.from(items);
function dedupe(array) {
  return Array.from(new Set(array));
}


class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() {return this;}
  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value}
    }
    return {done: true, value: undefined};
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}
// 遍历器对象的本质是一个指针对象
for(var value of range(0,3)){
  console.log(value);
}

function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
  var iterator = {next: next};

  var current = this;

  function next() {
    if(current) {
      var value = current.value;
      current = current.next;
      return { done: false, value: value };
    }else{
      return { done: true };
    }
  }
  return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);
one.next = two;
two.next = three;