// Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Creates an array of questions for user input
const questions = [];

// Writes the README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.log(error) : console.log('README generated');
    })
}

// Use inquirer to ask questions for the README generator
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter your title.',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter the description.',
            },
            {
                typy: 'input',
                name: 'installation',
                message: 'Enter the installation instructions.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter how to use the application.',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Describe how to contribute.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select a license.',
                choices: ['No license', 'MIT license'],
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter you GitHub username.',
            }
        ])
        .then((data) => {
            fs.writeFile('README.md', generateMarkdown(data), (error) => {
                error ? console.log(error) : console.log('README generated!');
            });
        })
}

// Function call to initialize app
init();
