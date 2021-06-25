// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },

    {
      type: 'input',
      name: 'projectDesc',
      message: 'Enter your project description:',
    },

    {
      type: 'input',
      name: 'instillation',
      message: 'Enter the instillation directions:',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions and or examples for use:',
    },


    {
      type: 'list',
      name: 'lisence',
      message: 'What license are you using?   SELECT ONE: ',
      choices: ['Academic Free License v3.0',
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0',
        'Boost Software License 1.0',
      ],
    },

    {
      type: 'input',
      name: 'contributors',
      message: 'Enter the list of contributors to the project:',
    },

    {
      type: 'input',
      name: 'tests',
      message: 'Enter a test case of your application:',
    },

    {
      type: 'input',
      name: 'questions',
      message: 'Enter any open questions here:',
    },

  ]);
};


//${answers.name}
const generateReadmeMD = (answers) =>
  `
  # README


  ## ${answers.projectTitle}

  Description: ${answers.projectDesc}

  ## Table of contents:

  Installation

  usage

  License

  Contributing
  
  Tests

  Questions


  ## Installation

  ${answers.instillation}

  ## usage

  ${answers.usage}

  ## License

  ${answers.lisence}

  ## Contributing
  
  ${answers.contributors}

  ## Tests

  ${answers.tests}

  ## Questions

  ${answers.questions}




`


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => writeToFile('readme.md', generateReadmeMD(answers)))
    .then(() => console.log('Successfully wrote to readdme.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
