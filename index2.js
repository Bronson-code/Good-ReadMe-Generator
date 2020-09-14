const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const userResponse = await inquirer
    .prompt ([
        {   type: "input",
            message: "What is the name of your project?",
            name: "projectName",
        }
        {   type: "input",
            message: "What are the details of the project?",
            name: "projectDescription",
        } 
        {   type: "input",
            message: "How does the user install the project?",
            name: "",
        }
        {   type: "input",
            message: "What are the instructions for use?",
            name: "",
        }
        {   type: "input",
        message: "What are some examples of usage for this project?",
        name: "",
        }
        {   type: "input",
        message: "Please give license name",
        name: "",
        }
    ])