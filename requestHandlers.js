function start() {
	console.log("Request Handler 'start' is called.");
	return "Hello start.";
}

function upload() {
	console.log("Request Handler 'upload' is called.");
	return "Hello upload.";
}

exports.start = start;
exports.upload = upload;
