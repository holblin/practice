function SimpleAdding(num) { 
  if(num < 2){
    return 1;
  }
  return num + SimpleAdding(num-1);
}

function SimpleAdding_2(num) { 
  var res = 1;
  for(var i = 2; i <= num; i++){
    res += i;
  }
  return i;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());