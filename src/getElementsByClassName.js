// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


//our document.body have many elements inside, we need to create a function that will
//travers through the document.body to access each element
//then use .classList method to check the classList array if the input className exist
//also using recursion and passing in the child node using .childNodes method to give us
//a array list of child node so we can travers through each child node to check className
var getElementsByClassName = function(className) {
  //create a empty array variable so we can store a array of found node
  var result = [];
  //create a variable for document.body for easier readability
  var docBody = document.body;
  //since getElementByClassBane function will only accept className string input
  //we need a helper function to help us travers through the nodes
  //and hoist the function to top
  function helperNodeSearch (node) {
    //set base case
    //travers through the node's classList by useing .classList method to convert to array list
    //with all the className
    _(node.classList).each(function(name) {
      //if name in the classList equal to className
      if(name === className) {
      //push the entire node to the result
      result.push(node);
      }
    });
    //but if this node have no such className exist, then move to the following childNodes
    //useing .childNodes method to gain an array list then travers through the childNodes list
    //and pass in each rach childNodes to the recursion function to compair the names
    _(node.childNodes).each(function(eachNode) {
      //pass each node in to recursion function to check condition
      helperNodeSearch(eachNode)
    });
  };
//pass in  the docBody in the helper node search to begin
helperNodeSearch(docBody)

  //we will return array full of result back to the user
  return result;
};