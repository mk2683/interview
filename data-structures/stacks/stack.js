function Stack() {
  var items = [];
  //other methods go here

  //Push an item in the Stack
  this.push = function (element) {
    items.push(element);
  };

  //Pop an item from the Stack
  this.pop = function () {
    return items.pop();
  };

  //Peek top item from the Stack
  this.peek = function () {
    return items[items.length - 1];
  };

  //Is Stack empty
  this.isEmpty = function () {
    return items.length === 0;
  };

  //Clear the Stack
  this.clear = function () {
    items.length = 0;
  };

  //Size of the Stack
  this.size = function () {
    return items.length;
  };
}

var stack = new Stack(); //creating new instance of Stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
