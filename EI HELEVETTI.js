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
},
{
type: "input",
name: "rolls",
message: "How many numbers?:"
}
])
.then(({ numbers, rolls }) => {
const min = parseInt(numbers.split("-")[0]);
const max = parseInt(numbers.split("-")[1]);
const rollAmount = parseInt(rolls);
if (rollAmount === 1)
console.log(`Your random number is: ${getRandomInt(min, max)}`);
else {
for (let i = 0; i < rollAmount; i++) {
console.log(`Roll ${i}: ${getRandomInt(min, max)}`);
}
}
});