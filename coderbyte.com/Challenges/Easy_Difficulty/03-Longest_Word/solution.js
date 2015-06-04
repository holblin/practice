// solution 1, regex + sort
function LongestWord(sen) {
  return sen.match(/\w+/g).sort(function(a, b){
    if(b.length == a.length){
      return -1;
    }
    return b.length - a.length;
  })[0];
}

// solution 2, clean and parse
function LongestWord_2(sen) {
  sen = sen.replace(/[^\w\s]/g, '');
  return sen.split(' ').sort(function(a, b){
    if(b.length == a.length){
      return -1;
    }
    return b.length - a.length;
  })[0];
}
  
// solution 3, hard way, clean and manual result
function LongestWord_3(sen) {
  sen = sen.replace(/[^\w\s]/g, '');
  sen = sen.split(' ');
  var l = sen.length, max = 0, result = "";
  for(var i = 0; i < l; i++) {
    if(sen[i].length > max) {
      max = sen[i].length;
      result = sen[i];
    }
  }
  return result;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());
