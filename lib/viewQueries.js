const queryDB = require("./queryDB");


// Function to view all employees.
const viewEmployees = async () => {

	const strQuery = `
		SELECT e.id ID, CONCAT(e.first_name, " ", e.last_name) Name, r.title "Job Title", d.name Department, CONCAT(m.first_name, " ", m.last_name) Manager, r.salary Salary
		FROM employee e
		LEFT JOIN employee m ON m.id = e.manager_id
		INNER JOIN role r ON r.id = e.role_id
		INNER JOIN department d ON d.id = r.department_id
		ORDER BY Department, Manager, Name
	`;

	const arrEmployees = await queryDB(strQuery);
	console.table(arrEmployees);

}

// Function to view all roles.
const viewRoles = async () => {

	const strQuery = `
		SELECT r.id ID, r.title "Job Title", r.salary Salary, d.name Department
		FROM role r
		LEFT JOIN department d ON d.id = r.department_id
		ORDER BY Department, Salary
	`;

	const arrRoles = await queryDB(strQuery);
	console.table(arrRoles);

}


// Function to view all departments.
const viewDepartments = async () => {

	const strQuery = `
		SELECT id ID, name Department
		FROM department
		ORDER BY ID
	`;

	const arrDepartments = await queryDB(strQuery);
	console.table(arrDepartments);

}


module.exports = {
	viewDepartments,
	viewRoles,
	viewEmployees
}
