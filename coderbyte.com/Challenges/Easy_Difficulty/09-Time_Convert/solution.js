function TimeConvert(num) { 

  var h = Math.floor(num / 60);
  //var m = num - h*60;
  var m = num %60;
  
  return h+':'+m;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());
