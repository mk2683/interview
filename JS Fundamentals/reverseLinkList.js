// Implement Link list

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

  append(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  delete(value) {
    let current = this.head,
      prev = null;

    if (current.value == value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    while (current) {
      if (current.value == value) {
        if (current.next == null) this.tail = prev;
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  reverse() {
    let prev = null,
      current = this.head,
      next = null;
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
      result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join("->"));
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
