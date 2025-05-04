// Implement a LinkList to add a node and delete a node and then traverse the list.

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

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const prevNode = this.tail; // or this.tail.next = newNode;
            prevNode.next = newNode;
            this.tail = newNode;
        }
    }

    deleteNode(value) {
        if (!value || !this.head) return; // Nothing to delete, Pass an input || Link List is empty

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null; // If list became empty
            return;
        }

        let currNode = this.head.next;
        while (currNode && currNode !== value) {
            currNode = currNode.next;
        }

        if(currNode){
            if (condition) {
                
            }
            currNode.next = currNode.next.next;
        }


        
    }

}