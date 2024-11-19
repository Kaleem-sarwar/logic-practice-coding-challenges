class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      return (this.head = newNode); // if head is empty node will be added to the head
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;
    this.size++;
  }
  print() {
    let current = this.head;

    let result = [];
    while (current) {
      result.push(current.value);

      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    }
    let current = this.head;

    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}
const list = new linkedlist();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(10);
list.prepend(20);
list.delete(3);

list.print();
console.log(list);
