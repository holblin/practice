function ABCheck(str) {
  return /a.{3}b|b.{3}a/i.test(str);
  //return /a...b|b...a/i.test(str);
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());
