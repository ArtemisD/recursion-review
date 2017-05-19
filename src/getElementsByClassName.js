// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  //document.body
  var body = document.body;

  //element.classList
  var checkNodes = function(node) {
    //If a node contains a classlist & that list has the passed in class
    if (node.classList) {
      if (node.classList.contains(className)) {
        //add that node to the result array
        result.push(node);
      }
    }
    //Use element.childNodes
    if (node.childNodes) {
      //look at all the child nodes by recursively usign this function
      //(in a loop for the number of child nodes)
      for (var i = 0; i < node.childNodes.length; i++) {
        checkNodes(node.childNodes[i]);
      }

    }

  };
  //Check all the things by looking at the body
  checkNodes(body);

  return result;

};
