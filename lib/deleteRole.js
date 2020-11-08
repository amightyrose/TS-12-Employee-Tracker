const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get a list of roles.
const getRoleList = async () => {

	const strQuery = `
		SELECT id AS value, title AS name
		FROM role
		ORDER BY name
	`;

	const arrRoles = await queryDB(strQuery);
	return arrRoles;

}


// Function to delete record from the database.
const deleteRole = async () => {


	// Show the delete role header.
	console.clear();
	writeHeader("Delete Role");


	// Question object for inquirer.
	const objQuestion = {
		type: "list",
		name: "id",
		message: "Choose role to delete:\n",
		choices: await getRoleList(),
		pageSize: 30
	}


	// Call inquirer to get role to delete.
	const objRole = await inquirer.prompt(objQuestion);


	// Set the query string.
	const strQuery = `DELETE FROM role WHERE id=?`;

	// Run the query. Pass id from the role object to use as the replacement value.
	await queryDB(strQuery, objRole.id);

	// Confirm record updated.
	console.clear();
	console.log(`\n   Role deleted.`.brightBlue);
	console.log("\n\n");


}


module.exports = deleteRole;