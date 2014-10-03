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

    function getElement(elements){
  
  		for(var i=0; i<elements.length; i++){
  			var child = elements[i].childNodes;
  			var classList = elements[i].classList;

  			if(classList[i] === className) {
  				result.push(elements[i]);
  			}
  		}
  	}
  
};
