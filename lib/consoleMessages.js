const colors = require("colors");
const logo = require("asciiart-logo");



const showSplashScreen = () => {

	const settings = {
		name: "Employee Tracker",
		font: "Modular",
		lineChars: 10,
		padding: 2,
		margin: 3,
		borderColor: "bold-green",
		logoColor: "bold-green"
	}

	console.log(logo(settings).render());
	console.log("\n\n");

}





module.exports = {
	showSplashScreen
}
