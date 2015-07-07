function SecondGreatLow(arr) { 
  arr.sort(function(a, b){
    return a - b;
  });
  var len = arr.length;
  var i;
  
  var low = arr[0];
  for(i = 1; i < len; i++) {
    if(low != arr[i]) {
      low = arr[i];
      break;
    }
  }
  
  var high = arr[len -1];
  for(i = len -2; i >= 0; i--) {
    if(high != arr[i]) {
      high = arr[i];
      break;
    }
  }
  
  return low + ' ' + high;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());
