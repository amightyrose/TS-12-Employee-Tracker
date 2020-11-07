const inquirer = require("inquirer");
const { viewEmployees, viewRoles, viewDepartments } = require("./viewQueries");


// Use inquirer to sow question and return user selection.
const promptMainMenu = async () => {

	const arrOptions = [
		new inquirer.Separator("\n──────── View ────────"),
		"View Employees",
		"View Roles",
		"View Departments",
		new inquirer.Separator("\n──────── Add ─────────"),
		"Add Employee",
		"Add Role",
		"Add Department",
		new inquirer.Separator("\n─────── Update ───────"),
		"Update Employee",
		new inquirer.Separator("\n──────────────────────"),
		"Exit",
		new inquirer.Separator("\n"),

	];

	const objQuestion = {
		type: "rawlist",
		name: "mainMenuSelection",
		message: "What would you like to do?\n",
		pageSize: 20,
		choices: arrOptions,
		default: 0,
	};

	const answers = await inquirer.prompt(objQuestion);
	return (answers.mainMenuSelection).split(" ").join("").toLowerCase();

}


// Function to show the menu and get selection.
const mainMenu = async () => {


	// Show the main menu header.
	const strHeader = `

================================================================================
|                                  Main Menu                                   |
================================================================================

	`

	console.log(strHeader.green);


	// Call promptMainMenu to ask the question.
	const mainMenuChoice = await promptMainMenu();


	// Call the next function depending on the answer.
	switch (mainMenuChoice) {
		case "viewemployees":
			await viewEmployees();
			break;
		case "viewroles":
			await viewRoles();
			break;
		case "viewdepartments":
			await viewDepartments();
			break;
		case "addemployee":
			await addEmployee();
			break;
		case "addrole":
			await addRole();
			break;
		case "adddepartment":
			await addDepartment();
			break;
		case "updateemployee":
			await updateEmployee();
			break;
		default:
			break;
	}


}





module.exports = mainMenu;