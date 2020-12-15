//variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);



//functions
//prompt the user to input needed information for README

const userInput = () =>
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter the project title:',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Enter a description of the project:',
        name: 'description',
        },
        {
        type: 'input',
        message: 'Enter the installation instructions for the project:',
        name: 'installation',
        },
        {
        type: 'input',
        message: 'Enter the usage information for this project:',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'Enter any contributors and guidelines for contributing to the project:',
        name: 'contribution',
        },
        {
        type: 'input',
        message: 'Enter any test instructions for the project:',
        name: 'testing',
        },
        {
        type: 'input',
        message: 'What is the link to your github profile?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        },
    ]);


//put the vales fromt he user prompts into a template

const createHTML = (response) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Project Title: ${response.title}</h1>
    <p class="lead">Description: ${response.description}</p>
    <p class="lead">Description: ${response.installation}</p>
    <p class="lead">Description: ${response.usage}</p>
    <p class="lead">Description: ${response.contribution}</p>
    <p class="lead">Description: ${response.testing}</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Info</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub profile is ${response.github}</li>
      <li class="list-group-item">Please contact me with questions: ${response.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;




//events  - Write the template into a file   

userInput()
    .then((response) => writeFile('index.html', createHTML(response)))
    .then((response) => console.log(response.title, response.description, response.installation, response.usage, response.contribution))
    .catch((error) => console.error(error));
