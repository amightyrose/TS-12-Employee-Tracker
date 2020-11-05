// Import stuff.
const mysql = require("mysql");
const { showSplashScreen } = require("./lib/consoleMessages");
const promptMainMenu = require("./lib/mainMenu");


// Create MySQL connection.
const connection = mysql.createConnection(
	{
	host: "localhost",
	port: 3306,
	user: "root",
	password: "SQLr00t",
	database: "employees_db"
	}
);

// Connect to the database.
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	init();
});


// Start the main routine.
async function init() {

	showSplashScreen();

	const mainMenuChoice = await promptMainMenu();

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

	connection.end();

}
