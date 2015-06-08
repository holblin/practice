function SwapCase(str) {
  return str.replace(/[a-z]/gi, function(c){
    if(/[a-z]/.test(c)){
      return c.toUpperCase();
    }else {
      return c.toLowerCase();
    }
  });
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());
