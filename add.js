var nameSpace = window.nameSpace || {};

nameSpace.add = function(a,b, callback) {
	callback();
	return console.log(a + b);
}