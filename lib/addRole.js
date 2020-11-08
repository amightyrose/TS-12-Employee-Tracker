const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get a list of departments.
const getDepartmentList = async () => {

	const strQuery = `
		SELECT id AS value, name
		FROM department
		ORDER BY ID
	`;

	const arrRoles = await queryDB(strQuery);
	return arrRoles;

}


// Function to get new role details.
const promptNewRole = async () => {

	const arrQuestions = [
		{
		type: "input",
		name: "title",
		message: " Enter the name of the new role: ",
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
		name: "salary",
		message: " Enter the salary for the new role:  ",
		validate: function(value) {
			const pass = value.match(/^[0-9]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid amount (numeric characters only).";
			}
		},
		{
		type: "list",
		name: "department_id",
		message: " Choose a department for the new role:\n",
		choices: await getDepartmentList(),
		pageSize: 10
		}
	];

	return inquirer.prompt(arrQuestions);

}


const addRole = async () => {

	// Show the add role header.
	console.clear();
	writeHeader("Add Role");

	// Query string.
	const strQuery = `INSERT INTO role SET ?`;

	// Call inquirer to get new role details.
	const objRole = await promptNewRole();

	// Run query to add new record.
	const newRecord = await queryDB(strQuery, objRole);

	// Confirm record added.
	console.clear();
	console.log(`\n   New role added. ID is`.brightBlue, `${newRecord.insertId}.`.brightYellow);
	console.log("\n\n");

}


module.exports = addRole;