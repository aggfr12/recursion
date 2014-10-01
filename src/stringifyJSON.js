// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	if(typeof obj === 'boolean'){
		return obj.toString();
	}

	if(typeof obj === 'number'){
		return String(obj);
	}

	if(typeof obj === 'string'){
		obj = '"' + obj + '"';
		return obj;
	}

	if(typeof obj === 'undefined'){
		return undefined;
	}

	if(typeof obj === 'function'){
		return undefined;
	}

};
