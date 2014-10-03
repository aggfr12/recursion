// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	if(typeof obj === 'boolean') {
		return obj.toString();
	}

	if(typeof obj === 'number') {
		return obj.toString();
	}

	if(typeof obj === 'string') {
		obj = '"' + obj + '"';
		return obj;
	}

	if(typeof obj === 'function') {
		return undefined;
	}

	if(obj === undefined) {
		return undefined;
	}

	if(obj === null) {
		return 'null';
	}

	if(Array.isArray(obj)) {
		var arrStr = '[';
		for(var i=0; i<obj.length; i++) {
			if(typeof obj[i] === 'function' || typeof obj[i] === 'undefined') {
				arrStr += 'null,';
			}
			else {
			arrStr += stringifyJSON(obj[i]) + ','; 
			}
		}
		if(obj.length > 0) {
			arrStr = arrStr.slice(0,arrStr.length-1);
		}
		arrStr += ']';
		return arrStr;
	}

	if(typeof obj === 'object') {
		var objStr = '{';
		for(var key in obj) {
			if(typeof obj[key] == 'function' || obj[key] === undefined) {
				//objStr += 'null,';
				return '{}';
			}
			else {
				objStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
		if(objStr[objStr.length-1] === ','){
			objStr = objStr.slice(0,objStr.length-1);
		}

		objStr += '}'
		return objStr;
	}
};













