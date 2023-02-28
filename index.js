const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num);

  return { ratio, factorial };
};

console.log(ratioAndFactorial(4, 8, 10));

module.exports = ratioAndFactorial;
