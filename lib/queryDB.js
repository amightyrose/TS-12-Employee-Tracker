const mysql = require("mysql");
const util = require("util");


// Function to query database.
const queryDB = async (query, values) => {

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

	// Promisify the db query
	const prmQuery = util.promisify(connection.query).bind(connection);

	const results = await prmQuery(query, values);
	connection.end();
	return results;

}

// Export the function.
module.exports = queryDB;
