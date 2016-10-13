// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //set base case if it is number, boolean, string etc.
  if(typeof obj === 'number') {
    return '' + obj + '';
  }
  if(obj === null) {
    return "null";
  }
  if(typeof obj === 'boolean') {
    return '' + obj + '';
  }
  if(typeof obj === 'string') {
    return '' + '"' + obj + '"' + '';
  }
  //if input is an array
  if(Array.isArray(obj)) {
    //create a empty result array to store elements after being stringify
    var result = [];
  //if (obj.length === 0) {
  //  return '['']'
  //} else {
    //if input no an empty array then travers through the array
    for (var i = 0; i < obj.length; i++) {
      //we will recurse stringify each element inside the array
      //then push the value in to the result array
      result.push(stringifyJSON(obj[i]));
    }
    //at the end we can manualy add "[" "]" to the end of the result array by "+" to concat it
    //so it will remove the square [] and add in the "[" "]"
    return "[" + result + "]"
  }
  //if input is an object
  if(typeof obj === 'object'){
    //we will create an empty array to store the values  and can easily be concat in to strings with commas ","
    var result2 = [];
    //and if object is empty by checking the length with the Object.keys().length method
    if(Object.keys(obj).length === 0) {
      //if length is 0 then return a curly string braces "{" "}"
      return '{' + '}';
    } else {
      //otherwise if the object have length(key values) travers through the input object
      for (var key in obj) {
        //check if the object have key value pair of functions and undefined
        if(key === 'functions' || typeof obj[key] === 'function' || key === 'undefined' || obj[key] === undefined) {
          //ignore those functions and undefined and return a empty object string "{" "}"
          return '{' + '}'
        } else {
        //if they are none of the above then we can stringify the key and the value
        //then concat them with ":" to key : value pair
        //and push it in to the result2 array as ["key : value"]
        result2.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
      }
    }
  }
  //then convert results2 array in to string by adding "" then add "{" "}" to the end
  return '{' + result2+'' + '}';
}
};
