/////////////////// SetTimeout var let /////////////////

for (var i = 1; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
} // output - 10(9 times, after every seconds) added to callback queue 9 times

for (let i = 1; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
} // output - 1,2,3,4,5,6,7,8,9 // saves the context aswell

for (var i = 1; i < 10; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, index * 1000);
  })(i);
} // output - 1,2,3,4,5,6,7,8,9 // saves the context from function argument

for (var index = 1; index < 10; index++) {
  function a(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  a(index);
} // output - 1,2,3,4,5,6,7,8,9

const obj = {
  name: "Billy",
  sing: function () {
    this.age = "20";
    console.log("a", this);
    var anotherFunction = function () {
      this.age = "30";
      console.log("b", this);
    };
    anotherFunction();
  },
};
obj.sing(); //first console will print properties of obj(name, age and sing) and second will print window object

abc();
function abc() {
  console.log("1");
}
function abc() {
  console.log("2");
}
function abc() {
  console.log("3");
}
//it will execute the last function statements.

var x;
(function test() {
  console.log("x --" + x);
})(); //this is self invoking so print undefine because x is not assigned any value yet
var y = function () {
  console.log("In y" + x); //function is not called from anywhere so this wont execute
};
another(); //this will call function another written below
var x = 10;
console.log(x); //will print 10 because x is assigned value 10
function another() {
  console.log(x); //will print undefine because x is not assigned any value yet
}
