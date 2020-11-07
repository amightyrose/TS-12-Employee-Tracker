const inquirer = require("inquirer");
const queryDB = require("./queryDB");


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

	const strQuery = `INSERT INTO department SET ?`;
	const objDepartment = await promptNewDepartment();

	const newRow = await queryDB(strQuery, objDepartment);

	console.log(`\nNew department added. ID is ${newRow.insertId}.`);

}


module.exports = addDepartment;
