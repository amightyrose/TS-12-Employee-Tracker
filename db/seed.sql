INSERT INTO department (name)
VALUES ("Admin"), ("Logistics"), ("IT"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Receptionist", 45000, 1),
("Office Manager", 60000, 1),
("Warehouse Manager", 65000, 2),
("Storeperson", 42000, 2),
("Courier Driver", 38000, 2),
("IT Manager", 85000, 3),
("Infrastructure Support", 68000, 3),
("Help Desk", 37000, 3),
("Sales Manager", 89000, 4),
("Sales Rep", 57000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Waits", 9, null),
("Ella", "Fitzgerald", 6, null),
("Nina", "Simone", 2, null),
("Jimi", "Hendrix", 3, null),
("Aretha", "Franklin", 4, 4),
("Duke", "Ellington", 5, 4),
("Freddie", "Mercury", 1, 3),
("Billie", "Holiday", 7, 2),
("Pete", "Townshend", 8, 2),
("Ian", "Anderson", 10, 1),
("Ringo", "Starr", 10, 1),
("June", "Christy", 4, 4);
