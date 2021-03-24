// Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// including generateMarkdown.js for this app
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your repository?",
    validate: (title) => {
      return title ? true : console.log("‼️ Please provide a project title.");
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
    validate: (description) => {
      return description
        ? true
        : console.log("‼️ Please provide a brief project description.");
    },
  },
  {
    type: "input",
    name: "install",
    message: "Please provide project installation instructions.",
    validate: (install) => {
      return install
        ? true
        : console.log("‼️ Please provide project installation instructions.");
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions/examples of use.",
    validate: (usage) => {
      return usage
        ? true
        : console.log("‼️ Please provide usage instructions.");
    },
  },
  {
    type: "list",
    name: "license",
    message: "What license will your project be covered under?",
    choices: ["MIT", "GNU GPL v2", "GNU GPL v3", "Apache 2.0", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: `Please provide contribution guidelines. Default is Contributor Covenant`,
    default:
      "Please refer to [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) for contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "tests?",
    validate: (tests) => {
      return tests ? true : console.log("‼️ Please provide a project title.");
    },
  },
  {
    type: "input",
    name: "username",
    message: "Please provide a GitHub username.",
    validate: (username) => {
      return username
        ? true
        : console.log("‼️ Please provide a GitHub username.");
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide an email for contacting.",
    validate: (email) => {
      return email ? true : console.log("‼️ Please provide an email.");
    },
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
