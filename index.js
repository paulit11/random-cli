const inquirer = require("inquirer");

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "numbers",
      message: "Number range:"
    }
  ])
  .then(({ numbers }) => {
    const min = parseInt(numbers.split("-")[0]);
    const max = parseInt(numbers.split("-")[1]);
    console.log(`Your random number is: ${getRandomInt(min, max)}`);
  });