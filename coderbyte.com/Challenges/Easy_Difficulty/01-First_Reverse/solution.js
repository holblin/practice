// Quick way
function FirstReverse(str) {
  return str.split('').reverse().join('');
}

// Use string way
function FirstReverse_2(str) {
  var str2 = "";
  for (var i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  };
  return str2;
}

// Recursive way
function FirstReverse_3(str) {
  if(str.length > 1) {
    return FirstReverse_3(str.substr(1)) + str.charAt(0);
  } else {
    return str;
  }
}

// Sort of dichotomic recursive way
function FirstReverse_4(str) {
  var l = str.length, middle = '';
  if(l > 1) {
    if(l%2 == 1) {
      middle = str.charAt(l/2);
    }
    return FirstReverse_4(str.slice(-l/2)) + middle + FirstReverse_4(str.slice(0, l/2));
  } else {
    return str;
  }
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());
