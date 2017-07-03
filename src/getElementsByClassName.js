// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = []

  var exploreClasses = function(results, node, className) {
    // check classList of node for a match of className
    //node.classList.contains(className)

    if (node.classList && node.classList.contains(className)) {
        results.push(node);
    }

    //check if there are more nodes under this node
      //if there are more nodes, then call exploreClasses function on that child
    if (node.childNodes) {
      for (var j =0; j<node.childNodes.length; j++) {
        exploreClasses(results, node.childNodes[j], className)
      }
    }



  }

  //call exploreClasses with document.body
  exploreClasses(results, document.body, className)

  return results


};
