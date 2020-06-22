const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const team = [];
function questions () {
    console.log("Follow the prompts to create a team website");
    function startManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee number",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your office number",
                name: "officeNumber"
            },
        ])
        .then(res => {
            const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
            team.push(manager);
            makeTeam();
        })
    }
    function makeTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add an engineer, intern, or generate your team website",
                name: "options",
                choices: ["Engineer", "Intern", "Generate your team website"]
            }
        ])
        .then(res => {
            switch (res.options) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Generate your team website":
                    buildTeam();
            }
        })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your engineers name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your engineer I.D.?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github",
                name: "github"
            },
        ])
        .then(res => {
            const engineer = new Engineer(res.name, res.id, res.email, res.github);
            team.push(engineer);
            makeTeam();
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your Interns name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your intern I.D. number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email",
                name: "email"
            },
            {
                type: "input",
                message: "What school do you attend?",             
                name: "school"
            },
        ])
        .then(res => {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            team.push(intern);
            makeTeam();
        })
    }
    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(team), "utf-8");
    }
    startManager();
}
questions();