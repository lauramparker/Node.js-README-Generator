//variables
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);



//functions
//prompt the user to input needed information for README

userInput = () =>
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
          type: 'list',
          message: 'Select a license for this project:',
          choices:['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 2-clause', 'BSD 3-clause'],
          name: 'license',
          },
        {
        type: 'url',
        message: 'What is the link to your github profile?',
        name: 'github',
        },
        {
        type: 'url',
        message: 'What is your email?',
        name: 'email',
        },
    ]).then(input => {
      return input
  })

  


//put the values from the user prompts into a template

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
    <p><span class="badge badge-success">${response.license}</span></p>
  <div class="dropdown-menu">
    <h6 class="dropdown-header">Table of Contents</h6>
    <a class="dropdown-item" href="#description">Description</a>
    <a class="dropdown-item" href="#installation">Installation</a>
    <a class="dropdown-item" href="#usage">Usage</a>
    <a class="dropdown-item" href="#contributions">Contributions</a>
    <a class="dropdown-item" href="#testing">Testing</a>
    <a class="dropdown-item" href="#license">License</a>
    <a class="dropdown-item" href="#questions">Questions</a>
  </div>

    <h3><a id="description"><u>Description</u></a></h3>
    <p class="lead">${response.description}</p>
    <h3><a id="installation"><u>Installation</u></a></h3>
    <p class="lead">${response.installation}</p>
    <h3><a id="usage"><u>Usage</u></a></h3>
    <p class="lead">${response.usage}</p>
    <h3><a id="contributions"><u>Contributions</u></a></h3>
    <p class="lead">${response.contribution}</p>
    <h3><a id="testing"><u>Testing</u></a></h3>
    <p class="lead">${response.testing}</p>
    <h3><a id="license"><u>License</u></a></h3>
    <p class="lead">This project utilizes the following license: ${response.license}</p>
    <h3><a id="questions"><u>Questions</u></a></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub profile is ${response.github}</li>
      <li class="list-group-item">Please contact me with questions: ${response.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`
;


//events  - Write the template into a file   

userInput()
    .then((response) => writeFile('index.html', createHTML(response)))
//  //   .then((response) => console.log(response.title, response.description, response.license)); //example test
    .catch((err) => console.error(err));



// async function init() {
//   try {
//     const answers = await userInput();
//     const createReadMe = createHTML(answers);

//     await writeFile('index.html', createReadMe);
    
//    // .catch((err) => console.error(err));
//   } catch(err) {
//     console.log(err);
//   }
// }

// init();

