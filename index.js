// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const path= require('path');
const fs= require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
const questions= [
    {
        type: 'input',
        message: 'What is the title of your page?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the page?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What commands need to be run to be able to use project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does this project have?',
        choices:['MIT','APACHE 2.0', 'GPL 3.0','NONE'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'Github',
    },
]

// TODO: Create a function to write README file
//look up fs.writeFilesSync and path.join and process.cwd and spread Operator "..."
function writeToFile(fileName, data) {}
//set up path by using fileName and data as placeholder
// TODO: Create a function to initialize app
function init() {}
//callback => to writeToFile (replace fileName and data)
// Function call to initialize app
init();
