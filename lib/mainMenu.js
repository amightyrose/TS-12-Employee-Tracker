const inquirer = require("inquirer");
const viewRecords = require("./viewRecords");
const addEmployee = require("./addEmployee");
const addRole = require("./addRole");
const addDepartment = require("./addDepartment");
const updateEmployee = require("./updateEmployee");
const { writeHeader } = require("./renderHeaders");


// Function to show the menu and get selection.
const mainMenu = async () => {


	// Define the inquirer paramaters.
	const arrOptions = [
		new inquirer.Separator("\n   ──────── View ────────".yellow),
		" View Employees",
		" View Roles",
		" View Departments",
		new inquirer.Separator("\n   ──────── Add ─────────".yellow),
		" Add Employee",
		" Add Role",
		" Add Department",
		new inquirer.Separator("\n   ─────── Update ───────".yellow),
		" Update Employee",
		new inquirer.Separator("\n   ──────────────────────".yellow),
		" Exit",
		new inquirer.Separator("\n"),

	];

	const objQuestion = {
		type: "list",
		name: "selection",
		message: "What would you like to do?\n",
		pageSize: 20,
		choices: arrOptions,
		default: 0,
		prefix: "  "
	};


	// Show the main menu header.
	writeHeader("Main Menu");


	// Call inquirer to ask the question.
	const answers = await inquirer.prompt(objQuestion);


	// Call the next function depending on the answer.
	switch (answers.selection.trim()) {
		case "View Employees":
			await viewRecords("employees");
			mainMenu();
			break;
		case "View Roles":
			viewRecords("roles");
			mainMenu();
			break;
		case "View Departments":
			viewRecords("departments");
			mainMenu();
			break;
		case "Add Employee":
			addEmployee();
			break;
		case "Add Role":
			addRole();
			break;
		case "Add Department":
			addDepartment();
			break;
		case "Update Employee":
			updateEmployee();
			break;
		default:
			break;
	}


}


module.exports = mainMenu;