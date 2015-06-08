function WordCount(str) {
  if(str.length == 0){
    return 0;
  }
  
  return str.split(' ').length;
}

function WordCount_2(str) {
  if(str.length == 0){
    return 0;
  }
  
  var r = str.match(/ /g)
  if(r == null){
    return 1;
  } else {
    return r.length + 1;
  }
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());
