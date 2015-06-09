function LetterCountI(str) {
  str = str.split(' ');
  for(var i = str.length -1; i >= 0; i--){
    str[i] = {
      value: str[i],
      score: (function(str){
        var used = {}, score = 0;
      str = str.split('');
        for(var i = str.length -1; i>= 0; i--){
          if(used[str[i]] != undefined){
            score ++;
          } else {
            used[str[i]] = true;
          }
        }
        return score;
      }(str[i]))
    };
  }
  
  str.sort(function(a,b) {
    return b.score - a.score;
  });
  str = str.shift();
  if(str.score == 0){
    return -1
  } else {
    return str.value;
  }
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());
