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
  while((is_arith || is_geo) && current != undefined){
    
    if(is_arith && current - last != arith_key) {
      is_arith = false;
    }    
    if(is_geo && current / last != geo_key) {
      is_geo = false;
    }
    
    last = current;
    current = arr.shift();
  }
  
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
