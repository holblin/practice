// regex powa
function LetterCapitalize(str) { 
  return str.replace(/(^[\w])|( \w)/g, function(c){
    return c.toUpperCase();
  })
}

// full manual (crazy ??)
function LetterCapitalize_2(str) {
  str = str.split('');
  var l = str.length;
  for(var i = 0; i < l; i++){
    if(i == 0 || (str[i-1] == ' ')){
      str[i] = str[i].toUpperCase();
    }
  }
  return str.join('');
}

// manual work
function LetterCapitalize_3(str) { 
  str = str.split(' ');
  for(var i = str.length -1; i >= 0; i --) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
