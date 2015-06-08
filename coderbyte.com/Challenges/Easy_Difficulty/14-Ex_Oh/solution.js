function ExOh(str) {
  return str.split('x').length == str.split('o').length;         
}

function ExOh_2(str) {
  return ((str.split('x').length -1) * 2 == str.length);
}

function ExOh_3(str) {
  var r = str.match(/x/g);
  if(r == null){
    return (str.length == 0);
  } else {
    return (str.match(/x/g).length * 2 == str.length);
  }
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh_3(readline());           
