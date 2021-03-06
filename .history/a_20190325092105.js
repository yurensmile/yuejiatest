import { func } from "prop-types";

var people = [
  {name: 'ALice', age: 21},
  {name: 'Max', age:20},
  {name: 'Jane', age:20}
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    console.log(key);
    if(!acc[key]){
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');