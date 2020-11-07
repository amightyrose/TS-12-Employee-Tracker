// Create department class.
class Department {

	constructor(name) {

		this.name = name;

	}

}


// Create employee class.
class Role {

	constructor(title, salary, department) {

		this.title = title;
		this.salary = salary;
		this.department = department;

	}

}


// Create employee class.
class Employee {

	constructor(firstName, lastName, role, manager) {

		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
		this.manager = manager;

	}

}


module.exports = {
	Department,
	Role,
	Employee
}
