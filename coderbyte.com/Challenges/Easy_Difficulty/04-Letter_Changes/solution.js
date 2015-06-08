
// Solution 1 : Full regex replace
function LetterChanges(str) { 
  return str.replace(/[a-z]/gi, function(c){
    if( /z/i.test(c)) {
      return 'A';
    }
    c = c.charCodeAt(0);
    c = String.fromCharCode( c+1 );
    
    if(/[aeiou]/.test(c)){
      c = c.toUpperCase();
    }
    
    return c;
  });
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());
