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

  
  var child = body.childNodes;
  

  //var child = document.childNodes;
  //var result = [];
  //var classes = [];

  //for(var i=0; i<child.length; i++){}
};
