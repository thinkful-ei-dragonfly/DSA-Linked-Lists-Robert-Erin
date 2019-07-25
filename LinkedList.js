class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if( this.head === null) {
      this.head = new _Node(item, this.head);
    }
    while(currNode.value !== key) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let currNode = this.head;
    // let nextNode = this.head;

    while(currNode.value !== key) {
        // prevNode = currNode;
        currNode = currNode.next;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, location) {
    let currNode = this.head;
    let count = 1;
    if(location === 0){
      this.head = new _Node(item, currNode);
      return;
    }
    while (count < location) {
      currNode = currNode.next;
      count ++;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      }
  }

  remove(item) {
    if(!this.head){
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !==item) {
      if(currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
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


function main(){
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  // SLL.insertBefore('newItem', 'Tauhida');
  // SLL.insertAfter('anotherItem', 'Apollo');
  SLL.insertAt('Kat', 0)
  SLL.printAll();

  // SLL.remove('squirrel');


}

// main();

const testList = new LinkedList();
testList.insertFirst('Apollo');
testList.insertLast('Boomer');
testList.insertLast('Erin');

const emptyList = new LinkedList();


function display(list) {
  let currNode = list.head;
  // console.log(list.head.value);
  if(!list.head){
    return null;
  }
  while(currNode.next !== null) {
      currNode = currNode.next;
      console.log(currNode.value);
  }
  currNode.next = currNode.next;
}

// display(testList);

function size(list) {
  let count;
  let currNode = list.head;
  if(!list.head){
    count = 0;
    return count;
  }
  count = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    count++;
}
return count;
}

// console.log(size(testList));

function isEmpty(list){
  return !list.head;
}

// console.log(isEmpty(testList));

function findPrevious(list, item) {
  let currNode = list.head;
  let prevNode = list.head;

    if(list.head === null) {
      console.log('No items in list');
      return;
    }
    if(item === currNode.value) {
      console.log('No items before first item in list');
      return;
    }
    while(currNode.value !== item && currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    return prevNode.value;
}

// console.log(findPrevious(testList, 'Apollo'));

function findLast(list) {
  let currNode = list.head;
  if(!list.head){
    console.log('No items in list');
    return;
  }
  while(currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
}
return currNode.value;
}

// console.log(findLast(emptyList));

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next;
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}
/* eliminates duplicate values, O(n^2) */

// const list = new LinkedList()
// list.insertLast(1);  // 1, 3, 2, 60, 3, 5
// list.insertLast(3);
// list.insertLast(2);
// list.insertLast(60);
// list.insertLast(3);
// list.insertLast(5);
// reverseList(list);
// list.printAll();

// 5. Reverse a list
function reverseList(list) {

  let currNode = list.head; // currNode = 1
  let reversed = null; // reversed = null
  // let nextNode = list.head;
    if(list.head === null) {
      console.log('No items in list');
      return;
    }
    
    while(currNode !== null) {  //  , currNode = 2
        // currNode.next = prevNode;
        let tempNode = currNode.next; // tempNode = 2 ,  tempNode = 3,
        currNode.next = reversed; // currNode.next = null  , currNode.next = 1
        reversed = currNode; // reversed = 1 , reversed = 2
        currNode = tempNode; // currNode = 2 , currNode = 3
        // // prevNode = prevNode.next;
        // currNode = currNode.next;
    }
    list.head = reversed;
    return list;
}

// 6. 3rd from end
const list = new LinkedList()
list.insertLast(1);  // 1, 3, 2, 60, 3, 5
list.insertLast(3);
list.insertLast(2);
list.insertLast(60);
list.insertLast(3);
list.insertLast(5);
list.insertLast(7);
// reverseList(list);
// list.printAll();

function findThirdElementFromEnd(inputList){
  let count;
  let currNode = inputList.head;
  if(!inputList.head){
    count = 0;
    return count;
  }
  count = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    count++;
}
  let thirdFromEnd = count -3;
  let idx = 0;
  let counterNode = inputList.head
  while(idx !== thirdFromEnd) {
    counterNode = counterNode.next;
    idx++;
  }
  return counterNode.value;
}

// console.log(findThirdElementFromEnd(list));
// list.printAll();

function findMiddleElement(inputList){
  let count;
  let currNode = inputList.head;
  if(!inputList.head){
    count = 0;
    return count;
  }
  count = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    count++;
}
  let middleElement = (Math.floor(count/2));
  console.log(`Middle element is ${middleElement}`)
  let idx = 0;
  let counterNode = inputList.head
  while(idx !== middleElement) {
    counterNode = counterNode.next;
    idx++;
  }
  return counterNode.value;
}

// console.log(findMiddleElement(list));

let CycleList = new LinkedList();
CycleList.insertFirst(1);
CycleList.insertLast(2);
CycleList.insertLast(3);

const newNode = new _Node(6, CycleList.head);
CycleList.insertAt()

currNode = CycleList.head;
prevNode = CycleList.head;
while(currNode.next !==null ){
  prevNode = currNode;
  currNode = currNode.next;
}
currNode.next = newNode;
// CycleList.printAll();

function isCycle(inputList){
  let currNode = inputList.head;
  let isFound = false;
  let history = [];
  while (currNode.next !== null) {
    if (history.includes(currNode)) {
      return true
    }
    history.push(currNode);
    currNode = currNode.next;
  }
  return false;
}

// console.log(isCycle(CycleList));

