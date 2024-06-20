class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(val) {
    let current = this.head;
    let prev = null;

    if (current.value === val) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return current.value;
    }

    while (current) {
      if (current.value === val) {
        prev.next = current.next;
        if (!prev.next) this.tail = prev;
        return current.value;
      }

      prev = current;
      current = current.next;
    }

    return -1;
  }

  reverse() {
    let prev = null,
      current = this.head,
      next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  print() {
    let current = this.head,
      print = [];

    while (current) {
      print.push(current.value);
      current = current.next;
    }

    console.log(print.join("->"));
  }
}

const list = new LinkList();

list.append(4);
list.append(6);
list.append(3);
list.append(2);
list.append(1);
list.append(7);
list.append(9);
list.append(8);
list.print();

list.delete(8);
list.print();
list.delete(4);
list.print();
list.delete(3);
list.print();
list.delete(6);
list.print();
list.delete(9);
list.print();

list.reverse();
list.print();
