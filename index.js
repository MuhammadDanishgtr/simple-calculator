#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter Your First Number:", type: "number", name: "Firstnumber" },
    { message: "Enter Your Second Number:", type: "number", name: "Secondnumber" },
    { message: "Select your Operator:", type: "list", name: "Operator", choices: ["addition", "subtraction", "multiplication", "division"] }
]);
if (answers.Operator === "addition") {
    console.log(answers.Firstnumber + answers.Secondnumber);
}
else if (answers.Operator === "subtraction") {
    console.log(answers.Firstnumber - answers.Secondnumber);
}
else if (answers.Operator === "multiplication") {
    console.log(answers.Firstnumber * answers.Secondnumber);
}
else if (answers.Operator === "division") {
    console.log(answers.Firstnumber / answers.Secondnumber);
}
else {
    console.log("Please Select a Valid Operator");
}
