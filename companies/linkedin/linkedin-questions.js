const Foo = function(a) {
  bar = function() {
    return a;
  }
  this.baz = function() {
    return this.a;
  };
};

Foo.prototype = {
  biz() {
    return this.a;
  },
};

const f = new Foo(7);

f.bar(); // error
f.baz(); // 7
f.biz(); // error

Foo.prototype = {
  newMEthod() {
    return this.a + 1;
  }
}
f.newMethod() //



// Question 2
/// Usually the output of 1 + function x() {alert(1);} is "1function x(){alert(1);}". Can you write a code such that the output should be "1start:function x() {alert(1);}:end".
// For that matter, it should work for any function by prepending 'start:' at the beginning of function and appending ':end' at the end of the function.

console.log(1 + function x() {alert(1)}); // "1function x(){alert(1);}" // "1start:function x() {alert(1);}:end"

// function(str, fn){
//   if(typeof fn == "")
// }

Function.prototype.toString = function(){
  const context = this;
  if( typeof context == "function") {
    return "start:" + String(context) + ":end";
  }

  return String(context);
}

function abc() {}
abc.toString()
23.toString()
console.log(String(function abc() {}))


/// Ans
// Save the original toString method
const originalToString = Function.prototype.toString;

// Override the toString method
Function.prototype.toString = function() {
    // Get the original function string
    const originalString = originalToString.call(this);

    // Modify the string as required
    return 'start:' + originalString + ':end';
};

// Example usage
const func = function x() { alert(1); };
console.log(1 + func);
