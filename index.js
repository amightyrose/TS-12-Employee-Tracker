// Import stuff.
const { showSplashScreen } = require("./lib/consoleMessages");
const mainMenu = require("./lib/mainMenu");


// Start the main routine.
const init = () => {

	// Show the splash screen.
	showSplashScreen();

	// Call the main menu function.
	mainMenu();

}

init();