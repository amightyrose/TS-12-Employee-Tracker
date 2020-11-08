const inquirer = require("inquirer");
const viewRecords = require("./viewRecords");
const addEmployee = require("./addEmployee");
const addRole = require("./addRole");
const addDepartment = require("./addDepartment");
const updateEmployee = require("./updateEmployee");
const { writeHeader } = require("./renderHeaders");
const deleteEmployee = require("./deleteEmployee");
const deleteRole = require("./deleteRole");


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
		new inquirer.Separator("\n   ──────── Delete ──────".yellow),
		" Delete Employee",
		" Delete Role",
		" Delete Department",
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
		pageSize: 30,
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
			break;
		case "View Roles":
			await viewRecords("roles");
			break;
		case "View Departments":
			await viewRecords("departments");
			break;
		case "Add Employee":
			await addEmployee();
			break;
		case "Add Role":
			await addRole();
			break;
		case "Add Department":
			await addDepartment();
			break;
		case "Delete Employee":
			await deleteEmployee();
			break;
		case "Delete Role":
			await deleteRole();
			break;
		case "Delete Department":
			await deleteDepartment();
			break;
		case "Update Employee":
			await updateEmployee();
			break;
		default:
			console.clear();
			console.log("Bye!".random);
			return;
	}

	// Show the main menu again after operation is complete.
	mainMenu();

}


module.exports = mainMenu;