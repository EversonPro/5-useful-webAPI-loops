// FOR LOOP
const numbers = [22, 34, 46, 58];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
// Result: 44 68 92 116

// WHILE LOOP
const numbers2 = [22, 34, 46, 58];
let i = 0;

while (i < numbers2.length) {
  console.log(numbers2[i] * 2);
  i++;
}
// Result: 44 68 92 116

// DO-WHILE LOOP
const numbers3 = [22, 34, 46, 58];
let j = 0;

do {
  console.log(numbers3[j] * 2);
  j++;
} while (j < numbers3.length);
// Result: 44 68 92 116

// FOR-OF LOOP
const numbers4 = [22, 34, 46, 58];

for (const num of numbers4) {
  console.log(num * 2);
}
// Result: 44 68 92 116

// FOR-IN LOOP
const numbers5 = {
  1: 22,
  2: 34,
  3: 46,
  4: 58,
};

for (const num in numbers5) {
  console.log(numbers5[num] * 2);
}
// Result 44 68 92 116

// MAP LOOP
const numbers6 = [22, 34, 46, 58];
const doubleofNumbers = numbers6.map((num) => {
  return num * 2;
});
// Result: [44, 68, 92, 116]

// FOR-EACH LOOP
numbers.forEach((num) => {
  console.log(num * 2);
});
// Result 44 68 92 116
