function Queue() {
  let items = [];

  //Add a new element in queue
  this.enqueue = (elm) => {
    items.push(elm);
  };

  //   this.enqueue = (elm) => {
  //     items[++rear] = elm;
  //     count++;
  //   };

  //Remove element from the queue
  this.dequeue = () => {
    return items.shift();
  };

  //   this.dequeue = () => {
  //     let current = front++;
  //     let temp = items[current];
  //     items[current] = null;
  //     count--;
  //     return temp;
  //   };

  //Return the first element from the queue
  this.front = () => {
    return items[0];
  };

  //Return the last element from the queue
  this.rear = () => {
    return items[items.length - 1];
  };

  //Check if queue is empty
  this.isEmpty = () => {
    return items.length == 0;
  };

  //Return the size of the queue
  this.size = () => {
    return items.length;
  };

  //Print the queue
  this.print = () => {
    console.log(items.toString());
  };
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("pranav");
queue.enqueue("sachin");
queue.enqueue("yogesh");
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue("prashant");
queue.enqueue("yadav");
queue.print();
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());
