const fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

function myFunction(value) {
  console.log(value);
}
fruits.forEach(myFunction);

const person = [];
person[0] = "John";
person[1] = "Doe";

console.log(Array.isArray(person));
console.log(fruits.toString());
console.log(fruits.join("-"));
console.log(fruits.pop()); // remove the last element from the array and returns the removed element
console.log(fruits);
console.log(fruits.push("New")); //add an elenent at the end returns the length of the new array after push
console.log(fruits);
console.log(fruits.shift()); // remove the first element from the array and returns the removed element
console.log(fruits);
console.log(fruits.unshift("First")); //add an elenent at the start and returns the length of the new array after unshift
console.log(fruits);
console.log(fruits.splice(2, 1)); //remove the element on the index declared as the first parameter number of element to remove is declared on the 2nd parameter it will return the removed elements as a array
console.log(fruits);
console.log(fruits.splice(2, 0, "Middle")); //it will remove number of element declared on 2nd parameter on the index of first param then insert the elements declared in the 3rd param will return any removed elem as array
console.log(fruits);

console.log(fruits.concat(person)); //join the main array with the param array
console.log(fruits);
console.log(fruits.slice(1, 2)); // returns a new array from the index on first param to the index of 2nd param
console.log(fruits);

console.log(fruits.sort());
console.log(fruits.reverse());

const num = [55, 85, 774, 2, 21, 885, 96, 8, 26, 445];

console.log(
  num.sort(function (a, b) {
    return a - b;
  })
);

console.log(Math.max.apply(null, num));

const car = [
  { type: "volvo", year: 2012 },
  { type: "audi", year: 2009 },
  { type: "sab", year: 2000 },
  { type: "bmw", year: 2021 },
  { type: "bmw", year: 2023 },
];

car.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
  return 0;
});
console.log(car);
