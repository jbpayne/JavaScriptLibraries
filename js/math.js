$(document).ready(function () {
// Using the correct math methods, calculate and display the following:
// base 10 log of 1000000
  console.log(`base 10 log of 1000000 = ${math.log10(1000000)}`);
// base 2 log of 64
console.log(`base 2 log of 64 = ${math.log2(64)}`);
// base 4 log of 16384
console.log(`base 4 log of 16384 = ${math.log(16384, 4)}`);
// square root of 96
console.log(`square root of 96 = ${math.sqrt(96)}`);
// square root of -64
console.log(`square root of -64 = ${math.sqrt(-64).toString()}`);
// simplify the expression '3x + 4y + 9x + 2y + 8'
console.log(`simplify the expression '3x + 4y + 9x + 2y + 8' = ${math.simplify('3x + 4y + 9x + 2y + 8').toString()}`);
// the cosine of 45 degrees
console.log(`the cosine of 45 degrees = ${math.cos(math.unit(45, 'deg'))}`);
});
