function Palindrome(str) { 
  str = str.replace(/[^a-z]/gi, '');
  return (str.split('').reverse().join('') == str);
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());