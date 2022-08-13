const inquirer = require("inquirer");

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
    case "View all roles":
    //return cooresponding function
    case "View all employees":
    //return cooresponding function
    case "ADD a department":
    //return cooresponding function
    case "ADD a role":
    //return cooresponding function
    case "ADD an employee":
    //return cooresponding function
    case "UPDATE employee's role":
    //return cooresponding function
  }
};
//function viewAllDepartments
//function viewAllRoles
//function viewAllEmployees
// function addDepartment
// function addRole
// function addEmployee
// function updateEmpRole

module.exports = chooseOption;
