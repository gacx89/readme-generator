const writeFile = require("./utils/generate-readme.js");
const inquirer = require("inquirer");
const generateReadme = require("./src/page-template");

const promptReadme = () => {
  // Prompt user for project's title, description, installation instructions, usage information, contribution guidelines, and test instructions.
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter the title of your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description for your project",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please enter a description for your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation steps for your project",
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            console.log("Please enter installation steps for your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage instructions for your project",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please enter usage instructions for your project!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Enter license instructions for your project",
        choices: ["MIT", "GNU GPLv3", "ISC", "Apache License 2.0"],
      },
      {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines for your project",
        validate: (contributionInput) => {
          if (contributionInput) {
            return true;
          } else {
            console.log(
              "Please enter contribution guidelines for your project!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions for your project",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter test instructions for your project!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
    ])
    .then((readmeData) => {
      console.log(readmeData);
      return readmeData;
    });
};

promptReadme()
  .then((readmeData) => {
    return generateReadme(readmeData);
  })
  .then((pageMarkdown) => {
    return writeFile(pageMarkdown);
  });
