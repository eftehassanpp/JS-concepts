const numbers = [6, 500, 52, 86, 95, 45, 66, 43];

// function myFunction(value, index, array) {
//   console.log(value);
//   console.log(array[index + 1]);
// }

// numbers.forEach(myFunction);

function myFunction(value, index, array) {
  if (value % 2 == 0) {
    return "even";
  }
  return "odd";
}

console.log(numbers.map(myFunction));
const evenNumbers = [];
const oddNumbers = [];

function newFunction(value, index, array) {
  if (value % 2 == 0) {
    evenNumbers.push(value);
  } else {
    oddNumbers.push(value);
  }
}
numbers.forEach(newFunction);
console.log(evenNumbers);
console.log(oddNumbers);

function countTotal(total, value, index, array) {
  return total + value;
}

const evenTotal = evenNumbers.reduce(countTotal);
console.log(evenTotal);
const oddTotal = oddNumbers.reduce(countTotal);
console.log(oddTotal);

function filterFunction(value, index, array) {
  return value % 2 == 0;
}

console.log(numbers.filter(filterFunction));

console.log(evenNumbers.includes(500));
console.log(Array.from("544315"));

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = newFruits.keys();
console.log(keys);
let text = "";
for (let x of keys) {
  console.log(x);
}

const date = new Date();
console.log(date.toUTCString());
