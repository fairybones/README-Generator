// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for README inputs
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions:',
        },
        {
            type: 'list',
            name: 'licenseBadge',
            message: 'Choose a license badge for this project:',
            choices: [
                {
                    name: 'Apache 2.0',
                    value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                },
                {
                    name: 'Eclipse Public License 1.0',
                    value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                },
                {
                    name: 'Mozilla Public License 2.0',
                    value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                },
                {
                    name: 'The Artistic License 2.0',
                    value: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
                },
                {
                    name: 'none',
                    value: ''
                }
            ],
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter contact information:',
        },
    ])
    .then((answers) => {

        // Generate the table of contents with links
const tableOfContents = `# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)
`; // Structure user responses
        const data = `# ${answers.title}

${tableOfContents}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution Guidelines
${answers.contribution}

## Test Instructions
${answers.tests}

## License
${answers.licenseBadge}

## Questions
${answers.questions}
${answers.email}
${answers.contact}
`; // Function to generate README.md file
        const fileName = 'README.md';

        fs.writeFile(fileName, data, (err) => {

            if (err) {
                console.error(err);
                return;
            }
            console.log(`${fileName} has been saved!`)
        });
    });

