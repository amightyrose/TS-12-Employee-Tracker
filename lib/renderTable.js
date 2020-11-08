// const ctable = require('console.table');
// const colors = require('colors');
const { writeHeader } = require('./renderHeaders');


// Prints table in the console. strTitle becomes the title of the table,
// data is the data to show in the table.
const renderTable = (title, data) => {

	console.clear();

	writeHeader(title);

	console.table(data);

}

module.exports = renderTable;