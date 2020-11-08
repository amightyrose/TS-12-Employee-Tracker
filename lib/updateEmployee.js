const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");

// Function to get a list of employees.
const getEmployeeList = async () => {

	const strQuery = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employee
		ORDER BY ID
	`;

	const arrEmployees = await queryDB(strQuery);
	return arrEmployees;

}


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


// Function to get update details.
const promptUpdateDetails = async () => {


	const arrQuestions = [
		{
			type: "list",
			name: "id",
			message: "Choose employee to update:\n",
			choices: await getEmployeeList(),
			pageSize: 20
		},
		{
			type: "list",
			name: "update_field",
			message: "What would you like to update?\n",
			choices: ["First Name", "Last Name", "Role", "Manager"],
			pageSize: 6
		},
		{
		type: "input",
		name: "first_name",
		message: "Enter the employee's first name: ",
		when: function(answers) {
			return answers.update_field === "First Name";
			},
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
		when: function(answers) {
			return answers.update_field === "Last Name";
			},
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
		when: function(answers) {
			return answers.update_field === "Role";
			},
		choices: await getRoleList(),
		pageSize: 12
		},
		{
		type: "list",
		name: "manager_id",
		message: "Choose the employee's manager:\n",
		when: function(answers) {
			return answers.update_field === "Manager";
			},
		choices: await getManagerList(),
		pageSize: 10
		}
	];

	return inquirer.prompt(arrQuestions);

}


// Function to update record in the database.
const updateEmployee = async () => {

	// Show the update employee header.
	console.clear();
	writeHeader("Update Employee");

	// Call inquirer to get employee and updated details.
	let objUpdate = await promptUpdateDetails();

	// Create an array and add the employee id.
	let arrUpdateValues = [objUpdate.id];

	// Remove the employee id and update_field properties from the object. Then we can use the
	// object as the second argument for queryDB.
	delete objUpdate.id;
	delete objUpdate.update_field;

	// Add the object to the start of arrUpdateValues.
	arrUpdateValues.unshift(objUpdate);

	// Set the query string.
	const strQuery = `UPDATE employee SET ? WHERE id=?`;

	// Run the query. Pass arrUpdateValues to use as the SET values.
	await queryDB(strQuery, arrUpdateValues);

	// Confirm record updated.
	console.clear();
	console.log(`\n   Employee updated.`.brightBlue);
	console.log("\n\n");

}


module.exports = updateEmployee;
