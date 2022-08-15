const inquirer = require("inquirer");

const db = require("./db/connections");
const cTable = require("console.table");

const chooseOption = async function () {
  const { options } = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "Choose an Option",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "ADD a department",
        "ADD a role",
        "ADD an employee",
        "UPDATE employee's role",
      ],
      default: "View all employees",
    },
  ]);
  switch (options) {
    case "View all departments":
      //return cooresponding function
      break;
    case "View all roles":
      //return cooresponding function
      break;
    case "View all employees":
      //return cooresponding function
      break;
    case "ADD a department":
      //return cooresponding function
      break;
    case "ADD a role":
      //return cooresponding function
      break;
    case "ADD an employee":
      //return cooresponding function
      break;
    case "UPDATE employee's role":
      //return cooresponding function
      break;
  }
};

//function viewAllDepartments
//db.query?  with 'router.get'?

//function viewAllRoles
//function viewAllEmployees
// function addDepartment
// function addRole
// function addEmployee
// function updateEmpRole
