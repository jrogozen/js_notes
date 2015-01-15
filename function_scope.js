//Function Scope

var numbers = [1,2,3]

for (var i in numbers) {
  console.log(numbers[i]);
}

i #=> 2

function sayOne() {
  var one = 1;
}

one #=> undefined

for (var i in numbers) {
  setTimeout(function() { // only runs when the thread is free
    console.log(numbers[i]);
  }, 0);
}

/* this outputs 3,3,3 because the for loop 
finishes running and does not create its own
scope, so when setTimeout starts, i is referring
to the global i, which is set to 2 */

for (var i in numbers) {
  (function() {
    var j = i;
    setTimeout(function() {
      consoel.log(numbers[j]);
    }, 0);
  })();
}

/* tihs outputs 1,2,3 because the self invoking
function is creating a new scope every time the for 
loop runs. the new scope has the saved value of j. */