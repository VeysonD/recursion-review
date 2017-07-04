// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean') {
    return obj + '';
  } else if (typeof obj === 'number') {
    return obj + '';
  } else if (obj === null) {
    return obj + '';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'function') {
    return undefined;
  } else if (obj === undefined) {
    return obj;
  } else if (Array.isArray(obj)) {
    var stringArray = [];
    for (var i = 0; i < obj.length; i += 1) {
      stringArray.push(stringifyJSON(obj[i]));
    }
    return "[" + stringArray.join(',') + "]";
  } else if (typeof obj === 'object') {
    var stringObj = '';
    for (var key in obj) {
      if (typeof key !== 'function' && typeof obj[key] !== 'function' && obj[key] !== undefined) {
        stringObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    stringObj = stringObj.slice(0, stringObj.length - 1);
    return stringObj = '{' +  stringObj + '}';
  }
};
