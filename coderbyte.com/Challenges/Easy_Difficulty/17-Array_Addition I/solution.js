function ArrayAdditionI(arr) { 
  arr = arr.sort(function(a, b) {
    return a<b;
  });
  var max = arr.shift();
  
  return TestNumber(arr, max);
}

function TestNumber(arr, number) {
  var l = arr.length;
  for(var i = 0; i < l; i++) {
     if(arr[i] == number){
       return true;
     } else if (TestNumber(arr.slice(0, i).concat(arr.slice(i+1)), number - arr[i])) {
       return true;
     }
  }
  return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());