const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get a list of employees.
const getEmployeeList = async () => {

	const strQuery = `
		SELECT id AS value, CONCAT(first_name, " ", last_name) AS name
		FROM employee
		ORDER BY name
	`;

	const arrEmployees = await queryDB(strQuery);
	return arrEmployees;

}


// Function to delete record from the database.
const deleteEmployee = async () => {


	// Show the delete employee header.
	console.clear();
	writeHeader("Delete Employee");


	// Question object for inquirer.
	const objQuestion = {
		type: "list",
		name: "id",
		message: "Choose employee to delete:\n",
		choices: await getEmployeeList(),
		pageSize: 30
	}


	// Call inquirer to get employee to delete.
	const objEmployee = await inquirer.prompt(objQuestion);


	// Set the query string.
	const strQuery = `DELETE FROM employee WHERE id=?`;

	// Run the query. Pass id from the employee object to use as the replacement value.
	await queryDB(strQuery, objEmployee.id);

	// Confirm record updated.
	console.clear();
	console.log(`\n   Employee deleted.`.brightBlue);
	console.log("\n\n");


}


module.exports = deleteEmployee;