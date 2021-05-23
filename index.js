// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the projects title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter description of the project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter project installation instructions (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage infomation (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines (Required)',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions (Required)',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please enter test instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to add a license for your project?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose license',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      when: ({ confirmLicense }) => confirmLicense
    },
  ]);
};

questions()
  .then((readmeData) => {
    return generateMarkdown(readmeData);
  })
  .then((markdown) => {
    return writeToFile("./dist/README.md", markdown);
  })
  .catch((err) => {
    console.log(err);
  });

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

