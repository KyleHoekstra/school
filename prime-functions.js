function logger(){
console.log( 'in logger' );  // code to run
} // end logger - put comment at end of function

function returner(){
  console.log( 'in returner' ); // var value boolean string
  return true; // you can return anything from a function
} // end returner

logger() // calling function
returner() // will log 'in returner'in console - ran in console it will return the boolean value 'true'

console.log( 'running returner:', returner() ); // logging the value out
// when a value is returned from a function (return true;(function returner())

function mathExample() {
  console.log( ' in mathExample' );
  let answer = 3 * 9; // creating a new var
  return answer; // returning the answer var
} // end mathExample
console.log( 'running mathExample:', mathExample() ); // return 27

function actualMath( num0, num1 ) { // adding 2 parameters
  console.log( 'in actualMath:', num0, num1 );
  let answer = num0 * num1;
  return answer;
} // end actualMath
console.log( 'running actualMath with 4 & 6:', actualMath( 4, 6 ) );
console.log( 'running actualMath with 0.123 & 654:', actualMath( 0.123, 654 ) );
console.log( 'running actualMath with 1 & 2:', actualMath( 1, 2 ));
console.log( 'running actualMath with 327 & 81.3:', actualMath( 327, 81.3 ) );
