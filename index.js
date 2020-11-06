// Import stuff.
const mysql = require("mysql");
const { showSplashScreen } = require("./lib/consoleMessages");
const mainMenu = require("./lib/mainMenu");


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

	// Show the splash screen.
	showSplashScreen();

	// Call the main menu function.
	mainMenu();

}
