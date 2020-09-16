// array of questions for user
const inquirer = require("inquirer");
const writeFileAsync = "writeFileAsync";
const fs = require("fs");
const util = require("util");
// const questions = 
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt ([    

{   type: "input",
    message: "What is the name of your project?",
    name: "projectName",
},
{   type: "input",
    message: "What are the details of the project?",
    name: "projectDescription",
},
{   type: "input",
    message: "What are the instructions to install the project?",
    name: "installationInstructions",
},
{   type: "input",
    message: "What are the instructions for use?",
    name: "projectUsage",
},
{   type: "input",
    message: "What are some examples of usage for this project?",
    name: "usageExamples",
},
{   type: "checkbox",
    message: "Please give license name",
    choices: 
        [  
            "Apache",
            "MIT",
            "ISC",
        ],
    name: "license",
},
{   type: "input",
    message: "Enter GitHub usernames of any contributors to this project",
    name: "contributors",
},

])};

// function to write README file
// function writeToFile(README.md, data) {
// }

// function to initialize program
async function init() {
    try { 
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Operation Successful!");
    } catch (err) { 
        console.log(err);
    }

}

// function call to initialize program
init();
