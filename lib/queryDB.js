const mysql = require("mysql");
const util = require("util");

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

// Function to query database.
const queryDB = async (strQuery, values) => {

	const results = await prmQuery(strQuery, values);
	connection.end();
	return results;

}

// Export the function.
module.exports = queryDB;