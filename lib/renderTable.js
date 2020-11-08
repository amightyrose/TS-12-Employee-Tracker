// const ctable = require('console.table');
// const colors = require('colors');
const { writeHeader } = require('./renderHeaders');


// Prints table in the console. strTitle becomes the title of the table,
// data is the data to show in the table.
const renderTable = (title, data) => {

	console.clear();

	// Write a header for the table.
	writeHeader(title);

	// Write the table.
	console.table(data);

	// After rendering, add some blank lines.
	console.log("\n\n");

}

module.exports = renderTable;