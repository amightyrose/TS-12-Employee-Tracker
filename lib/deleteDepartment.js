const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get a list of departments.
const getDepartmentList = async () => {

	const strQuery = `
		SELECT id AS value, name
		FROM department
		ORDER BY name
	`;

	const arrDepartments = await queryDB(strQuery);
	return arrDepartments;

}


// Function to delete record from the database.
const deleteDepartment = async () => {


	// Show the delete department header.
	console.clear();
	writeHeader("Delete Department");


	// Question object for inquirer.
	const objQuestion = {
		type: "list",
		name: "id",
		message: "Choose department to delete:\n",
		choices: await getDepartmentList(),
		pageSize: 30
	}


	// Call inquirer to get department to delete.
	const objDepartment = await inquirer.prompt(objQuestion);


	// Set the query string.
	const strQuery = `DELETE FROM department WHERE id=?`;

	// Run the query. Pass id from the department object to use as the replacement value.
	await queryDB(strQuery, objDepartment.id);

	// Confirm record updated.
	console.clear();
	console.log(`\n   Department deleted.`.brightBlue);
	console.log("\n\n");


}


module.exports = deleteDepartment;