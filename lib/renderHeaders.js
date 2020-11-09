const colors = require("colors");
const logo = require("asciiart-logo");


const strBorder = "   ".concat("=".repeat(77));


// Displays the main application header.
const writeLogo = () => {

	const settings = {
		name: "Employee Tracker",
		font: "Ansi Shadow",
		lineChars: 10,
		padding: 3,
		margin: 3,
		borderColor: "bold-green",
		logoColor: "bold-green",
		textColor: "bold-green"
	}

	console.log(logo(settings)
		.emptyLine()
		.right("v 1.0")
		.render());
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
