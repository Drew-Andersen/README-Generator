// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if there is no license return an empty string
  if (license === 'No License') {
    return '';
    // if the license is MIT return the MIT license badge
  } else if (license === 'MIT License'){
    return '[make-shield]';
  }
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === 'No License') {
    return '';
  // if the license is MIT return a string showing the license and a link to the license
  } else if (license === 'MIT License') {
    return `This README generator is licensed under the [${license}(link)]`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
