// Import packages.
const mysql = require("mysql");

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



const init = () => {

	connection.query(
		"SELECT * FROM employee",
		function (err, response) {
			console.log(response);
		}
	)



	connection.end();
}
