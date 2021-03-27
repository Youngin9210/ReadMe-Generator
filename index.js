// Including packages needed for this application
// requiring file system
const fs = require("fs");
// requiring inquirer
const inquirer = require("inquirer");

// including generateMarkdown.js for this app
const generateMarkdown = require("./utils/generateMarkdown.js");

// an array of questions for user input
const questions = [
  // TITLE
  {
    type: "input",
    name: "title",
    message: "What is the title of your repository?",
    // validating that the input is true. If not, ask for input again.
    validate: (title) => {
      // if true, then return true. Else, console.log a message
      return title ? true : console.log("‼️ Please provide a project title.");
    },
  },
  // DESCRIPTION
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
    // validating that the input is true. If not, ask for input again.
    validate: (description) => {
      return description
        ? // if true, then return true.
          true
        : // Else, console.log a message
          console.log("‼️ Please provide a brief project description.");
    },
  },
  // INSTALL
  {
    type: "input",
    name: "install",
    message: "Please provide project installation instructions.",
    // validating that the input is true. If not, ask for input again.
    validate: (install) => {
      return install
        ? // if true, then return true.
          true
        : // Else, console.log a message
          console.log("‼️ Please provide project installation instructions.");
    },
  },
  // USAGE
  {
    type: "input",
    name: "usage",
    message: "Please provide examples of use.",
    // validating that the input is true. If not, ask for input again.
    validate: (usage) => {
      return usage
        ? // if true, then return true.
          true
        : // Else, console.log a message
          console.log("‼️ Please provide usage instructions.");
    },
  },
  // LICENSE
  {
    type: "list",
    name: "license",
    message: "What license will your project be covered under?",
    // listing choices for license types
    choices: ["MIT", "GNU GPL v2", "GNU GPL v3", "Apache 2.0", "None"],
  },
  // CONTRIBUTE
  {
    type: "input",
    name: "contribute",
    message: `Please provide contribution guidelines. Default is Contributor Covenant. Press ENTER to use default`,
    // setting default value of contribute
    default:
      "Please refer to [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) for contribution guidelines",
  },
  // TESTS
  {
    type: "input",
    name: "tests",
    message: "Are there any tests for your application?",
    // validating that the input is true. If not, ask for input again.
    validate: (tests) => {
      // if true, then return true. Else, console.log a message
      return tests
        ? true
        : console.log("‼️ Please provide any tests for your application.");
    },
  },
  // USERNAME
  {
    type: "input",
    name: "username",
    message: "Please provide a GitHub username.",
    // validating that the input is true. If not, ask for input again.
    validate: (username) => {
      // if true, then return true. Else, console.log a message
      return username
        ? true
        : console.log("‼️ Please provide a GitHub username.");
    },
  },
  // EMAIL
  {
    type: "input",
    name: "email",
    message: "Please provide an email for contacting.",
    // validating that the input is true. If not, ask for input again.
    validate: (email) => {
      // if true, then return true. Else, console.log a message
      return email ? true : console.log("‼️ Please provide an email.");
    },
  },
];

// a function to write README file
function writeToFile(fileName, data) {
  // prompting the command line and passing through data.
  // Then passing through function
  inquirer.prompt(data).then((answers) => {
    // writing file with provided fileName and generateMarkdown exported from generateMarkdown.js
    fs.writeFile(
      // writing file to a designated folder to makes sure to not overwrite existing readme.md
      `./fileTests/${fileName}`,
      generateMarkdown(answers),
      (err) => {
        if (err) throw err;
        // logging success when completed if successful
        console.log("Success! Your README.md file has been created!");
      }
    );
  });
}

// a function to initialize app
function init() {
  // writing file README.md and passing through the questions array
  writeToFile("readme.md", questions);
}

// Function call to initialize app
init();
