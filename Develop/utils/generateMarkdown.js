function renderLicenseBadge(license) {
  // if there is no license return an empty badge
  if (license === 'No License') {
    return '';
    // if the license is MIT return the MIT license badge
  } else if (license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === 'No License') {
    return '';
  // if the license is MIT return a string showing the license and a link to the license
  } else if (license === 'MIT License') {
    return `This README generator is licensed under the [${license}(https://opensource.org/licenses/MIT)]`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  } else {
    return (
      `## License 
      ${renderLicenseLink(license)}`
    )
  }
}

// Create the Markdown for the README
function generateMarkdown(data) {
  return (
    `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)

    # Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Badges
    ${renderLicenseBadge(data.license)}

    ## Contribute
    ${data.contribution}

    ## GitHub
    ${data.username}(https://github.com/${data.username})

`);
}

module.exports = generateMarkdown;
