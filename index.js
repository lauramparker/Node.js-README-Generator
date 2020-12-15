//variables
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFile = util.promisify(fs.writefile);



//functions
const userInput = () =>
    inquirer.prompt([
        {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        },
        {
        type: 'password',
        message: 'What is your location?',
        name: 'location',
        },
        {
        type: 'url',
        message: 'Enter your github link',
        name: 'github',
        },
        {
        type: 'url',
        message: 'Enter your linkedin link',
        name: 'linkedin',
        },
    ]);




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
    <h1 class="display-4">Hi! My name is ${response.name}</h1>
    <p class="lead">I am from ${response.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${response.github}</li>
      <li class="list-group-item">LinkedIn: ${response.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;




//events    

userInput()
    .then((response) => console.log(response.name, response.location, response.github))
    .then((response) => writeFile('index.html', createHTML(response)));
    .then(()
    fs.writeFile('text.html', response, (err)=> {
    err ? console.error(err) : console.

    }
);