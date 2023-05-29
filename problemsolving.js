function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 6));

const students = [
  "Dev",
  "Jason",
  "Carl",
  "Trunk",
  "Mern",
  "Roan",
  "Mick",
  "Kevin",
];

students.sort();
console.log(students);

const studentRoll = [
  { name: "Dev", roll: 52 },
  { name: "Jason", roll: 10 },
  { name: "Carl", roll: 11 },
  { name: "Trunk", roll: 6 },
  { name: "Mern", roll: 32 },
  { name: "Roan", roll: 9 },
  { name: "Mick", roll: 19 },
  { name: "Kevin", roll: 1 },
];

studentRoll.sort(function (a, b) {
  let x = a.roll;
  let y = b.roll;
  return x - y;
});

console.log(studentRoll);

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

console.log(isLeapYear(2028));
console.log(isLeapYear(3400));

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(string) {
  let count = 0;
  let stringArr = Array.from(string);
  console.log(stringArr);
  stringArr.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(countVowels("I am a full stack web developer"));

const multiNumbers = [5, 3, 1, 99, 85, 80, 99, 85, 50, 31, 1, 30, 3];

duplicateNumbers = multiNumbers.filter(function (value, index) {
  return multiNumbers.indexOf(value) !== index;
});

uniqueNumbers = multiNumbers.filter(function (value, index) {
  return multiNumbers.indexOf(value) === index;
});

console.log(duplicateNumbers);
console.log(uniqueNumbers);

let i = 0;
let text = "";
while (i < 10) {
  text += "the numbers is " + i;
  i++;
}
console.log(text);

do {
  console.log(i);
  i++;
} while (i < 0);

const cars = ["texla", "BMW", "volvo", "saab", "ford"];
let j = 0;
while (cars[j]) {
  console.log(cars[j]);

  j++;
}
