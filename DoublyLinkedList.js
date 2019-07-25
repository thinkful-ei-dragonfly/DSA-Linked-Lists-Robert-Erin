class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let newNode = new _Node(item, this.head, null);
      if(this.head !== null){
        this.head.prev = newNode;
      }
      this.head = newNode;
      if(this.tail === null){
        this.tail = newNode;
      }
  }

  insertBefore(item, key) {
    let currNode = this.head;

    if(this.head === null) {
      let newNode = new _Node(item, this.head, null);
      if(this.head !== null){
        this.head.prev = newNode;
      }
      if(this.tail === null){
        this.tail = newNode;
      }
    }
    while(currNode.value !== key) {
        currNode = currNode.next;
    }
    let nodeToInsert = new _Node(item, currNode.prev, currNode);
    let oldCurrNode = currNode.prev;
    console.log(`Current Node: ${currNode.value}, CurrNode.prev ${currNode.prev.value}, CurrNode.prev.prev ${currNode.prev.prev.value}`);
    currNode.prev = nodeToInsert;
    console.log(`Current Node: ${currNode.value}, CurrNode.prev ${currNode.prev.value}, CurrNode.prev.prev ${currNode.prev.prev.value}`);
    oldCurrNode.next = nodeToInsert;
  }

  insertAfter(item, key) {
    // let currNode = this.head;
    // // let nextNode = this.head;

    // while(currNode.value !== key) {
    //     // prevNode = currNode;
    //     currNode = currNode.next;
    // }
    // currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, location) {
    // let currNode = this.head;
    // let count = 1;
    // if(location === 0){
    //   this.head = new _Node(item, currNode);
    //   return;
    // }
    // while (count < location) {
    //   currNode = currNode.next;
    //   count ++;
    // }
    // currNode.next = new _Node(item, currNode.next);
  }

  insertLast(item) {
    // if (this.head === null) {
    //   this.insertFirst(item);
    // }
    // else {
    //   let tempNode = this.head;
    //   while (tempNode.next !== null) {
    //     tempNode = tempNode.next;
    //   }
    //   tempNode.next = new _Node(item, null);
    //   }
  }

  remove(item) {
    // if(!this.head){
    //   return null;
    // }

    // if(this.head.value === item) {
    //   this.head = this.head.next;
    // }

    // let currNode = this.head;
    // let prevNode = this.head;

    // while((currNode !== null) && (currNode.value !== item)){
    //   prevNode = currNode;
    //   currNode = currNode.next;
    // }
    // if(currNode === null) {
    //   console.log('Item not found');
    //   return;
    // }
    // previousNode.next = currNode.next;
  }

  find(item) {
    // let currNode = this.head;
    // if(!this.head){
    //   return null;
    // }
    // while(currNode.value !==item) {
    //   if(currNode.next === null) {
    //     return null;
    //   }
    //   else {
    //     currNode = currNode.next;
    //   }
    // }
    // return currNode;
  }

  printAll() {
    let currNode = this.head;
    console.log(this.head.value);
    if(!this.head){
      return null;
    }
    while(currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode.value);
    }
    currNode.next = currNode.next;
  }
}

const testDLL = new DoublyLinkedList();
testDLL.insertFirst('a');
testDLL.insertFirst('b');
testDLL.insertFirst('c');
testDLL.insertBefore('hi', 'a');
testDLL.printAll();

