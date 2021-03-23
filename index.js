// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    type: "list",
    name: "license",
    message: "license?",
    choices: ["MIT", "GNU GPL v2", "GNU GPL v3", "Apache 2.0", "Unlicense"],
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
    name: "username",
    message: "github username?",
  },
  {
    type: "input",
    name: "email",
    message: "email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(data).then((answers) => {
    fs.writeFile(fileName, generateMarkdown(answers), (err) => {
      if (err) throw err;
      console.log("nice!!");
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README.md", questions);
}

// Function call to initialize app
init();
