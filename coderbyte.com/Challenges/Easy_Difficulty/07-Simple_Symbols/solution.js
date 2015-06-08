// regex powa (find an error)
function SimpleSymbols(str) { 
  return !/^[a-z]|[^+][a-z]|[a-z][^+]|[a-z]$/i.test(str);
}

// regex powa (check correct)
function SimpleSymbols_2(str) { 
  return str.match(/^((\+[a-z])+\+|[^a-z])*$/i) !== null;
}
  
// manual mode
function SimpleSymbols_3(str) { 
  var l = str.length;
  if(/[a-zA-Z]/.test(str[0])){
    return false;
  }
  if(/[a-zA-Z]/.test(str[l-1])){
    return false;
  }
  for(var i = 1; i < l - 1; i ++){
    if(/[a-zA-Z]/.test(str[i]) && (str[i-1] != '+' || str[i+1] != '+')) {
      return false;
    }
  }
  return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());
