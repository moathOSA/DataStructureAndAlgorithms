class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //create new node first
    const node = {
      value: value,
      next: null
    };
    //set the next (pointer)
    // here `head.next` is overwritten
    this.tail.next = node;
    //set the tail
    // here `tail` break the reference to `head` so `head` is not overwritten
    this.tail = node
    //increase the length
    this.length = this.length + 1;
  }
  preappend(value) {
    const node = {
      value: value,
      next: this.head
    };
    this.head = node;
    this.length = this.length + 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array);
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
    }
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
      if (i === index - 1) {
        currentNode.next = {
          value: currentNode.value,
          next: currentNode.next
        }
        currentNode.value = value
        this.length += 1
      }
    }
  }

  remove(index) {
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
      if (i === index - 1) {
        currentNode.next = currentNode.next.next
        this.length -= 1
      }
    }
  }
}

 let myLinkedList = new LinkedList(10);
 myLinkedList.preappend(1)
 myLinkedList.append(5);
 myLinkedList.append(16);
 myLinkedList.append(18);
 myLinkedList.insert(2,99);
 myLinkedList.remove(2)
 myLinkedList.printList();
console.log(myLinkedList.head);
/////////////////////////////////////////////////////////////////////
class Node {
  constructor(value) {
    return {
      value: value,
      next: null
    }
  }
}

class linkedlist {
    constructor(value) {
      this.head =new Node(value);
      this.tail = this.head;
      this.length = 1;
    }

    append(value) {
      let node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.length++;
      //console.log(this.head);
    }

    preappend(value) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      //console.log(this.head);
    }

    insert(index, value){
      if (index === 0) {
        this.prepend(value)
      }

      let currentNode = this.head;
      for(let i =0; i < index; i++){
        currentNode = currentNode.next;
        if(i == index -1){
          currentNode.next = {
            value: currentNode.value,
            next: currentNode.next
        }
        currentNode.value = value;
      }
        this.length += 1
    }
  }

  remove(index) {
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
      currentNode = currentNode.next;
      if(i == index - 1){
        currentNode.next = currentNode.next.next;
      }
    }
    this.length--;
  }
}

// let linkedlisto = new linkedlist(10);
// linkedlisto.append(5);
// linkedlisto.preappend(1);
// linkedlisto.insert(2,99);
// linkedlisto.remove(0);
// console.log(linkedlisto.head);
