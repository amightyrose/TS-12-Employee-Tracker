const queryDB = require("./queryDB");

// Function to run SELECT queries on the db and show results.
const viewRecords = async (strRecordType) => {


	// Declare the db query string variable
	let strQuery;

	// Set db query string according to what we want to view.
	switch (strRecordType) {
		case "employees":
			strQuery = `
				SELECT e.id ID, CONCAT(e.first_name, " ", e.last_name) Name, r.title "Job Title", d.name Department, CONCAT(m.first_name, " ", m.last_name) Manager, r.salary Salary
				FROM employee e
				LEFT JOIN employee m ON m.id = e.manager_id
				INNER JOIN role r ON r.id = e.role_id
				INNER JOIN department d ON d.id = r.department_id
				ORDER BY Department, Manager, Name`;
			break;
		case "roles":
			strQuery = `
				SELECT r.id ID, r.title "Job Title", r.salary Salary, d.name Department
				FROM role r
				LEFT JOIN department d ON d.id = r.department_id
				ORDER BY Department, Salary`;
			break;
		case "departments":
			strQuery = `
				SELECT id ID, name Department
				FROM department
				ORDER BY ID`;
			break;
	}

	// Call queryDB to run the query.
	const arrResults = await queryDB(strQuery);

	// Call renderTable to show the results.
	console.table(arrResults);


}


// Export the function.
module.exports = viewRecords;