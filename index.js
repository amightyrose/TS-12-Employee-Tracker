const { writeLogo } = require("./lib/headers");
const mainMenu = require("./lib/mainMenu");


// Start the main routine.
const init = () => {

	console.clear();

	// Show the splash screen.
	writeLogo();

	// Call the main menu function.
	mainMenu();

}

init();
