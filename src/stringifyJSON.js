// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //seems like in order to implement this, I need to know type of obj that is getting passed in

  //if obj is null, undefinded, or a function it returns null
  if (obj === null || typeof(obj) === 'undefined' || typeof(obj) === 'function') {
    return 'null';
  }
  //if obj is a boolean + number
  //just need a string concatted to make them strings
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number') {
    return obj + '';
  }

  //if obj is a string
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  //if obj is an array
  if (Array.isArray(obj)) {
    var allOfArray = '[';
    //iterate through the whole array
    for (var i = 0; i < obj.length; i++) {
      //for each, add value to the allof string
      //if the element is nothing or a function, we need to return a blank array
      if (obj[i] === undefined || typeof(obj[i]) === 'function') {
        return '[]';
      }
      //use earlier stringify stuff in obj
      allOfArray += stringifyJSON(obj[i]);
      //need comma for all but last array element
      if (i < obj.length - 1) {
        allOfArray += ',';
      }
    }
    return allOfArray + ']';
  }

  //if obj is an object
  if (typeof(obj) === 'object') {
    //get all the keys
    var allKeys = Object.keys(obj);
    var allOfObj = '';
    for (var i = 0; i < allKeys.length; i++) {
      if (obj[allKeys[i]] === undefined || typeof(obj[allKeys[i]]) === 'function') {
        return '{}';
      }
      //use earlier stringify stuff in obj
      allOfObj += stringifyJSON(allKeys[i]) + ':' + stringifyJSON(obj[allKeys[i]]);
      //need comma for all but last element
      if (i < allKeys.length - 1) {
        allOfObj += ',';
      }
    }
    return '{' + allOfObj + '}';
  }

};
