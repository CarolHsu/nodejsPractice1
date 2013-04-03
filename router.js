function route(pathname, response){
	console.log("About to route a response for " + pathname );
	// switch(pathname){
	// 	case '/kitty':
	// 	response.end("Hello kitty");
	// 	break;
	// 	case '/love':
	// 	response.end("Hello spring");
	// 	break;
	// 	default:
	// 	response.end("Hello world");
	// 	break;		
	// }
}

exports.route = route;