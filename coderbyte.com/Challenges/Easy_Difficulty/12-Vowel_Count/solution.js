function VowelCount(str) { 
  var r = str.match(/[aeiou]/gi);
  if(r === null){
    return 0;
  }
  return r.length;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());
