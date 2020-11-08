const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get a list of roles.
const getRoleList = async () => {

	const strQuery = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY ID
	`;

	const arrRoles = await queryDB(strQuery);
	return arrRoles;

}


// Function to get a list of managers.
const getManagerList = async () => {

	const strQuery = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employee
		WHERE ISNULL(manager_id)
		ORDER BY ID
	`;

	const arrManagers = await queryDB(strQuery);
	return arrManagers;

}


// Function to get employee details.
const promptNewEmployee = async () => {

	const arrQuestions = [
		{
		type: "input",
		name: "first_name",
		message: "Enter the employee's first name: ",
		validate: function(value) {
			const pass = value.match(/^[a-zA-Z\s]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid name (alphabetic characters and spaces only).";
			}
		},
		{
		type: "input",
		name: "last_name",
		message: "Enter the employee's last name: ",
		validate: function(value) {
			const pass = value.match(/^[a-zA-Z\s]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid name (alphabetic characters and spaces only).";
			}
		},
		{
		type: "list",
		name: "role_id",
		message: "Choose the employee's role:\n",
		choices: await getRoleList(),
		pageSize: 12
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager:\n",
		choices: await getManagerList(),
		pageSize: 10
		}
	];

	return inquirer.prompt(arrQuestions);

}


// Function to add employee to the database.
const addEmployee = async () => {

	// Show the add employee header.
	console.clear();
	writeHeader("Add Employee");

	// Set query string.
	const strQuery = `INSERT INTO employee SET ?`;

	// Call inquirer to get new role details.
	const objEmployee = await promptNewEmployee();

	// Run query to add new record.
	const newRecord = await queryDB(strQuery, objEmployee);

	// Confirm record added.
	console.clear();
	console.log(`\n   New employee added. ID is`.brightBlue, `${newRecord.insertId}.`.brightYellow);
	console.log("\n\n");

}


module.exports = addEmployee;
