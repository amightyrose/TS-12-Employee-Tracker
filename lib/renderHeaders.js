const colors = require("colors");
const logo = require("asciiart-logo");


const strBorder = "   ".concat("=".repeat(77));


// Displays the main application header.
const writeLogo = () => {

	const settings = {
		name: "Employee Tracker",
		font: "Star Wars",
		lineChars: 10,
		padding: 2,
		margin: 3,
		borderColor: "bold-green",
		logoColor: "bold-green"
	}

	console.log(logo(settings).render());
	console.log("\n\n");

}


// Shows a header containing strText.
const writeHeader = (strText) => {

	const strPadding = " ".repeat(Math.floor((80 - strText.length) / 2));

	const strHeader = `${strBorder}\n${strPadding}${strText}\n${strBorder}\n\n`

	console.log(strHeader.brightGreen);

}


module.exports = {
	writeLogo,
	writeHeader
}
