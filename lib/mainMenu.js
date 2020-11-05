const inquirer = require("inquirer");

async function promptMainMenu() {

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
		name: "mainSelection",
		message: "What would you like to do?\n",
		pageSize: 20,
		choices: arrOptions,
		default: 0,
		filter: (value) => {
			return value.split(" ").join("").toLowerCase();
		}
	};

	const strHeader = `

===============================================
|                 Main Menu                   |
===============================================

`

	console.log(strHeader);

	const answers = await inquirer.prompt(objQuestion);
	return answers.mainSelection;

}


module.exports = promptMainMenu;