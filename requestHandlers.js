var exec = require('child_process').exec;

function start(response) {
	console.log("Request Handler 'start' is called.");
	var content = "empty";
	exec("find /", function(error, stdout, stderr){
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(stdout);
		response.end();
	})	
	return content; 
}

function upload(response) {
	console.log("Request Handler 'upload' is called.");
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
