/* Question One */

(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// a is undefined, b is defined. I'm not sure why both of them aren't undefined.

/* Question Two */
function createBase(num1) {
  return function (num2) {
    return num1 + num2;
  }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

/* Question 3

From a research I found that the difference between functional and object-oriented programming comes from space complexity. If we use functional programming, the memory usages will be less than OOP. OOP uses lots of data compare to functional programming. The benefit of OOP's is coming from reusablity and maintenance is much better than functional programming.

*/