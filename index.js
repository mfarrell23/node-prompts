// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const path= require('path');
const fs= require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
inquirer.prompt ([
    
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
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
])
.then((data)=>{
    init(data);
})

function init(data) {
    console.log("calling init function");
    fs.writeFileSync('README.md', generateMarkdown(data));
}