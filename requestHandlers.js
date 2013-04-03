function start() {
	console.log("Request Handler 'start' is called.");

	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);
	
	return "Hello start.";
}

function upload() {
	console.log("Request Handler 'upload' is called.");
	return "Hello upload.";
}

exports.start = start;
exports.upload = upload;
