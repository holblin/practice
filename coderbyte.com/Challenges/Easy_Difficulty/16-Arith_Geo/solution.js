function ArithGeo(arr) {
  var l = arr.length;
  
  var is_arith = true, arith_key,
      is_geo = true, geo_key;
  
  var last = arr.shift();
  var current = arr.shift();
  
  arith_key = current - last;
  geo_key = current / last;
  
  last = current;
  current = arr.shift();
  do {
    
    if(is_arith && current - last != arith_key) {
      is_arith = false;
    }    
    if(is_geo && current / last != geo_key) {
      is_geo = false;
    }
    
  	current = arr.shift();
    last = current;
  } while(!is_arith && !is_geo && last != undefined);
  
  if(is_arith) {
    return 'Arithmetic';
  } else if (is_geo) {
    return 'Geometric';
  } else {
    return -1;
  }      
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());


1. When the input was (1,2,3,4,5,10,20) your output was incorrect.
2. When the input was (1,2,3,4,5,6,7,88,2) your output was incorrect.
3. When the input was (10,110,210,310,410,511) your output was incorrect.