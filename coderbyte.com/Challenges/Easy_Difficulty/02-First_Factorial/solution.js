// non recursive solution
function FirstFactorial(num) { 
  res = 1;
  for(var i = 2; i <= num; i ++) {
    res *= i;
  }
  return res;
}

// recursive solution
function FirstFactorial_2(num) {
  if(num < 2){
    return 1;
  }
  
  return num * FirstFactorial_2(num -1);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());           
