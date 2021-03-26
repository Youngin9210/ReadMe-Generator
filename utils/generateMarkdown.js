// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  // object of license badges from shields.io
  const badges = {
    MIT:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GPLv2:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    None: "",
  };

  // destructuring the badges object
  const { MIT, GPLv2, GPLv3, Apache, Unlicense, None } = badges;

  // returning badge when license is equal to one of the badge objects
  return license === "MIT"
    ? MIT
    : license === "GNU GPL v2"
    ? GPLv2
    : license === "GNU GPL v3"
    ? GPLv3
    : license === "Apache 2.0"
    ? Apache
    : None;
};

// a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  // object of links to use take to license page when clicked
  const links = {
    MIT: "(https://opensource.org/licenses/MIT)",
    GPLv2: "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    GPLv3: "(https://www.gnu.org/licenses/gpl-3.0)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
    None: "",
  };

  // destructuring links object
  const { MIT, GPLv2, GPLv3, Apache, Unlicense, None } = links;

  // returning badge when license is equal to one of the badge objects
  return license === "MIT"
    ? MIT
    : license === "GNU GPL v2"
    ? GPLv2
    : license === "GNU GPL v3"
    ? GPLv3
    : license === "Apache 2.0"
    ? Apache
    : None;
};

// a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  // if renderLicenseBadge is false,
  return !renderLicenseBadge(license)
    ? // then return an empty string
      ``
    : // else, return license section
      `## License

This application is covered under the terms of the [${license}](LICENSE) license.`;
};

// a function to generate markdown for README
function generateMarkdown(data) {
  // destructuring the data object that is being passed through
  const {
    title,
    description,
    install,
    usage,
    license,
    contribute,
    tests,
    username,
    email,
  } = data;

  // returning the markdown using template literals
  return `
# ${title} 

${renderLicenseBadge(license) + renderLicenseLink(license)} 

![GitHub last commit](https://img.shields.io/github/last-commit/${username}/${title})
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${username}/${title})
![GitHub commit activity](https://img.shields.io/github/languages/count/${username}/${title})
![GitHub commit activity](https://img.shields.io/github/languages/top/${username}/${title})

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## Contribute

${contribute}

## Tests

${tests}

## Questions

Created by: [${username}](https://github.com/${username})

For any further information or questions please contact me at [${email}](mailto:${email})


${renderLicenseSection(license)}`;
}

// exporting generateMarkdown to be used in index.js
module.exports = generateMarkdown;
