const inquirer = require("inquirer");
const db = require("./db"); //auto-looks for the index.js where i'm now calling the queries with sql
// const db = require("./db/connections");
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
      return viewDepartments();
    case "View all roles":
      return viewAllRoles();
    case "View all employees":
      return viewAllEmployees();
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
const viewDepartments = async () => {
  // const sql = `SELECT * FROM department;`;
  const results = await db.getAllDept();
  const table = cTable.getTable(results);
  console.log(table);
  chooseOption();
};

//function viewAllRoles
const viewAllRoles = async () => {
  const results = await db.getAllRole();
  const table = cTable.getTable(results);
  console.log(table);
  chooseOption();
};

//function viewAllEmployees
const viewAllEmployees = async () => {
  const results = await db.getAllEmployee();
  const table = cTable.getTable(results);
  console.log(table);
  chooseOption();
};

// function addDepartment
// function addRole
// function addEmployee
// function updateEmpRole
chooseOption();
