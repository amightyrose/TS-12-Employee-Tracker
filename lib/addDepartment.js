const inquirer = require("inquirer");
const queryDB = require("./queryDB");
const { writeHeader } = require("./renderHeaders");


// Function to get new department details.
const promptNewDepartment = async () => {

	const objQuestion = {
		type: "input",
		name: "name",
		message: "Enter the name of the new department: ",
		validate: function(value) {
			const pass = value.match(/^[a-zA-Z\s]+$/i);
			if (pass) {
				return true;
			}
			return "Please enter a valid name (alphabetic characters and spaces only).";
			}
		};

	return inquirer.prompt(objQuestion);

}


// Function to add new department to the database.
const addDepartment = async () => {

	// Show the add department header.
	console.clear();
	writeHeader("Add Department");

	// Set query string.
	const strQuery = `INSERT INTO department SET ?`;

	// Call inquirer to get new department details.
	const objDepartment = await promptNewDepartment();

	// Run query to add new record.
	const newRecord = await queryDB(strQuery, objDepartment);

	// Confirm record added.
	console.clear();
	console.log(`\n   New department added. ID is`.brightBlue, `${newRecord.insertId}.`.brightYellow);
	console.log("\n\n");

}


module.exports = addDepartment;
