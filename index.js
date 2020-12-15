//variables
const fstat = require('fs');
const inquirer = require('inquirer');



//functions
inquirer
  .prompt([
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
  ])
  .then((response) =>

        console.log(response.name, response.location, response.github));

    fs.writeFile('text.html', response, (err)=> {
    err ? console.error(err) : console.

    }
);