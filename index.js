// console.log("hello World");

// var x = 100;

// console.log(global);

// console.log(globalThis);
/* 
console.log(process.argv); */

// Accept a number from CMD line argument and square the number and print the same
/* const num = Number(process.argv[2]);
console.log(num * num); */

// Accept few numbers from CMD line argument and find the sum of all numbers
let sum = 0;
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
