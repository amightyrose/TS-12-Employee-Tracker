const { writeLogo } = require("./lib/renderHeaders");
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
