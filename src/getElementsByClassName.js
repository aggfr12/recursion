// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
	var body = document.body;	
    var result = [];

    if(body.classList.contains(className)) {
  		result.push(body);
    }

    function getElement(elementCheck){
  
		if(elementCheck.classList.contains(className)) {
  			result.push(body);
  		
  		for(var i=0; i<elementCheck.length; i++){
  			var child = elementCheck[i].childNodes;
  			var classList = elementCheck[i].classList;

  			if(classList === className) {
  				result.push(elementCheck[i]);
  			}

  			for(var j=0; j<child.length; j++) {
  				getElement(child[j]);
  			}
  		}
  	}

  	getElement(body);
  	return result;
};
