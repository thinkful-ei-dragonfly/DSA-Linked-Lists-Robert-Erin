class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let newNode = new _Node(item, this.head, null);
    if (this.head !== null) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  insertBefore(item, key) {
    let currNode = this.head;

    if (this.head === null || this.head.value === key) {
      let newNode = new _Node(item, this.head, null);
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      if (this.tail === null) {
        this.tail = newNode;
      }
      this.head = newNode;
      return;
    }
    while (currNode.value !== key) {
      currNode = currNode.next;
    }
    let nodeToInsert = new _Node(item, currNode, currNode.prev);
    let oldCurrNode = currNode.prev;
    // console.log(`Current Node: ${currNode.value}, CurrNode.prev ${currNode.prev.value}`);
    currNode.prev = nodeToInsert;
    // console.log(`Current Node: ${currNode.value}, CurrNode.prev ${currNode.prev.value}`);
    oldCurrNode.next = nodeToInsert;
  }

  insertAfter(item, prevItem) {
    let currentNode = this.head;
    while (currentNode.value !== prevItem) {
      if (currentNode === null) {
        console.log('Item not found');
        return;
      }
      currentNode = currentNode.next;
    }
    if (currentNode === this.last) {
      insertLast(item);
    } else {
      let newNode = new _Node(item, currentNode.next, currentNode);
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.previous = newNode;
      currentNode.next = newNode;
    }
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.value !== item) {
      current = current.next;
      if (current === null) {
        console.log('Item to remove is not on the list');
        return null;
      }
    }
    //found it - now remove it

    //if the node to be removed is head, make the next node head
    if (current === this.head) {
      this.head = current.next;
      //return;
    } else {
      current.prev.next = current.next;
    }

    //delete last node
    if (current === this.tail) {
      this.tail = current.prev;
    } else {
      current.next.prev = current.prev;
    }
  }

  /*
  TODO: Below is legacy code from singly LL, need to convert to double 
  */
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
    if (!this.head) {
      return null;
    }
    while (currNode.next !== null) {
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
testDLL.insertBefore('hi', 'c');
testDLL.printAll();
