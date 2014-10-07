// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
	var body = document.body;	
    var result = [];

    function getElement(elementCheck){
		
		if(typeof elementCheck.classList !== "undefined"){

			if(elementCheck.classList.contains(className)) {
	  			result.push(elementCheck);
	  		}
	  	}	

	  	var child = elementCheck.childNodes;
	  	
	  	if(typeof child !== "undefined") {
		  	
		  	if(child.length > 0) {
			  	for(var i=0; i<child.length; i++){
			  		getElement(child[i]);
			  	}
	  		}
	  	}
  	}

  	getElement(body);
  	return result;
};
