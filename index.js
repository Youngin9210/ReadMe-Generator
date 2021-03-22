// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Contents?",
  },
  {
    type: "input",
    name: "description",
    message: "Description?",
  },
  {
    type: "input",
    name: "install",
    message: "Install?",
  },
  {
    type: "input",
    name: "usage",
    message: "usage?",
  },
  {
    type: "input",
    name: "license",
    message: "license?",
  },
  {
    type: "input",
    name: "contribute",
    message: "contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //   inquirer.prompt(questions).then((data) => {
  //     // console.log({ ...answers });
  //
  //     fs.writeFile(fileName, data, (err) => {
  //       if (err) throw err;
  //       console.log("nice!!");
  //     });
  //   });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
