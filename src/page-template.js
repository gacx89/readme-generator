module.exports = (templateData) => {
  
  // Return formatted README in markdown using user's input.
  return `![License Badge](https://img.shields.io/badge/license-${encodeURI(templateData.license)}-green)

# ${templateData.title}

## Description
${templateData.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${templateData.installation}

## Usage

${templateData.usage}

## License

This project is covered under the ${templateData.license} license.

## Contributing

${templateData.contribution}

## Tests

${templateData.tests}

## Questions

If you have questions regarding this project, my GitHub profile is <https://www.github.com/${templateData.github}>.

Additionally, I can be reached by email at <${templateData.email}>.
`;
};

