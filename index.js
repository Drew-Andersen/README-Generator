// Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

// Creates an array of questions for user input
const questions = [];

// Function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.log(error) : console.log('README generated');
    })
}

// TODO: Create a function to initialize app
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
                choises: ['No license', 'MIT license'],
            },
            {
                type: 'input',
                name: 'username',
                message: 'Enter you GitHub username.',
            }
        ])
        .then((data) => {
            fs.writeFile('README.md', generateMarkdown(data));
        })
}

// Function call to initialize app
init();
