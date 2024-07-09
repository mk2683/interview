const Foo = function(a) {
  this.a = a
  this.bar = function() {
    return this.a;
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