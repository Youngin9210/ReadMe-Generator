const checkLicense = (license) => {
  return license === "MIT"
    ? MIT
    : license === "GNU GPL v2"
    ? GPLv2
    : license === "GNU GPL v3"
    ? GPLv3
    : license === "Apache 2.0"
    ? Apache
    : Unlicense;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  const badges = {
    MIT:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GPLv2:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    Unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
  };
  const { MIT, GPLv2, GPLv3, Apache, Unlicense } = badges;

  return license === "MIT"
    ? MIT
    : license === "GNU GPL v2"
    ? GPLv2
    : license === "GNU GPL v3"
    ? GPLv3
    : license === "Apache 2.0"
    ? Apache
    : Unlicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  const links = {
    MIT: "(https://opensource.org/licenses/MIT)",
    GPLv2: "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    GPLv3: "(https://www.gnu.org/licenses/gpl-3.0)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
    Unlicense: "(http://unlicense.org/)",
  };
  const { MIT, GPLv2, GPLv3, Apache, Unlicense } = links;

  return license === "MIT"
    ? MIT
    : license === "GNU GPL v2"
    ? GPLv2
    : license === "GNU GPL v3"
    ? GPLv3
    : license === "Apache 2.0"
    ? Apache
    : Unlicense;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  return `${renderLicenseBadge(license) + renderLicenseLink(license)}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    // confirmTitle,
    description,
    install,
    license,
    contribute,
    tests,
    username,
    // confirmUsername,
    email,
    // confirmEmail,
  } = data;
  return `
# ${title} 

${renderLicenseSection(license)} 

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

## Contribute

${contribute}

## Tests

${tests}

## Questions

Created by: [${username}](https://github.com/${username})

For any further information or questions please contact me at [${email}](mailto:${email})

## License

This application is covered under the terms of the [${license}](LICENSE) license.`;
}

module.exports = generateMarkdown;
