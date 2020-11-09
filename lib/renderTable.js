// const ctable = require('console.table');
// const colors = require('colors');
const { cyan } = require('colors');
const { Table } = require('console-table-printer');
const { writeHeader } = require('./renderHeaders');


// Prints table in the console. strTitle becomes the title of the table,
// data is the data to show in the table.
const renderTable = (title, data) => {


	// Function to calculate column alignment/colour according to value type.
	const getColumnSettings = (property) => {

		// If it's a number, align right and colour yellow.
		if (typeof data[0][property] === "number") {
			return { name: property, alignment: "right", color: "yellow" };
		}

		// Otherwise align left.
		return { name: property, alignment: "left"};

	}


	// Create an array to use as column settings.
	const arrColumns = [];


	// Get property names from the first object and use them to set column properties.
	for (const propertyName in data[0]) {
		arrColumns.push(getColumnSettings(propertyName));
	}


	// Set the first column to cyan.
	arrColumns[0].color = "cyan";


	// Instantiate a new table and use arrColumns to set the columns.
	const table = new Table({ columns: arrColumns });


	// Add the rest of the data to the table.
	table.addRows(data);


	// Clear the console before rendering.
	console.clear();


	// Write a header for the table.
	writeHeader(title);


	// Write the table.
	table.printTable();


	// Add some blank lines.
	console.log("\n\n");


}

module.exports = renderTable;