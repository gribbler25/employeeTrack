//you can put your queries here..

const db = require("./connections.js"); //connect to mysql

const getAllDept = async () => {
  return await db.query(`SELECT * FROM department;`);
};
const getAllRole = async () => {
  return await db.query(`SELECT * FROM role;`);
};
const getAllEmployee = async () => {
  return await db.query(`SELECT * FROM employee;`);
};

module.exports = { getAllDept, getAllRole, getAllEmployee }; //give these values to index.js functions
