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
    prevNode.next = currNode.next;
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
testList.insertLast('Erin');
testList.insertLast('Husker');
testList.insertLast('Starbuck');

const emptyList = new LinkedList();

const newList = new LinkedList();
newList.insertFirst('1');
newList.insertLast('2');
newList.insertLast('2');
newList.insertLast('3');
newList.insertLast('4');



function deleteDuplicates(list){
  let currNode = list.head
  while(currNode.next !== null){
    // console.log(currNode.value)
    if(currNode.next.value === currNode.value){
      list.remove(currNode.next.value)
    }
    currNode = currNode.next
    // if(currNode.next.value === currNode.value){
    //   console.log('duplicate')
    //   // list.remove(currNode.next)
    //   // console.log(currNode)
    //   // currNode = currNode.next
    // }
  }

  return list.printAll()
}

// deleteDuplicates(newList);

const list1 = new LinkedList();
list1.insertFirst('B');
list1.insertLast('i');
list1.insertLast('l');
list1.insertLast('b');
list1.insertLast('o');
list1.insertLast('a');

const list2 = new LinkedList();
list2.insertFirst('B');
list2.insertLast('i');
list2.insertLast('l');
list2.insertLast('b');
list2.insertLast('o');
list1.insertLast('b');

function compare(list1, list2){
  let currNode1 = list1.head
  let currNode2 = list2.head
  let string1 = ''
  let string2 = ''
  while(currNode1.next !== null){
    string1 += currNode1.value
    currNode1 = currNode1.next
  }
  string1 += currNode1.value
  while(currNode2.next !== null){
    string2 += currNode2.value
    currNode2 = currNode2.next
  }
  string2 += currNode2.value

  let result = string1.localeCompare(string2)
  return result
}

console.log(compare(list1, list2))


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
  let currNode = list.head;
  if(!list.head){
    return 0;
  }
  let count = 1;
  while(currNode.next !== null) {
    currNode = currNode.next;
    count++;
}
return count++;
}

// console.log(size(testList));

function isEmpty(list){
  return !list.head;
}

// console.log(isEmpty(testList));

function findPrev(ll, item){
  let currNode = ll.head;
  let prevNode = ll.head;

  if(ll.head === item){
    return 'first item in list';
  }

  if(ll.head === null){
    return 'list is empty';
  }

  while(currNode.next !== null && currNode.next.value !== item){
    prevNode = currNode;
    currNode = currNode.next;
  }

  if(!currNode.next){
    return 'item not found in list';
  }

  return currNode.value;
}

// console.log(findPrev(testList, 'Starbuck'))

function findLast(list) {
  let currNode = list.head;
  if(!list.head){
    return 'No items in list';
  }
  while(currNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
}
return currNode.value;
}

// console.log(findLast(testList));

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

const alist = new LinkedList()
alist.insertLast(1);  
alist.insertLast(2);
alist.insertLast(3);
alist.insertLast(4);
alist.insertLast(5);
alist.insertLast(6);
// reverseList(alist);
// alist.printAll();

// 6. 3rd from end
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

// console.log(findThirdElementFromEnd(alist));

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
  console.log(`Middle element position is ${middleElement}`)
  let idx = 0;
  let counterNode = inputList.head
  while(idx !== middleElement) {
    counterNode = counterNode.next;
    idx++;
  }
  return `value at middle position is ${counterNode.value}`;
}

// console.log(findMiddleElement(alist));

// alternate:
function findMiddle(list) {
  var fastPointer = list.head;
  var slowPointer = list.head;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer.value;
}

// console.log(findMiddle(alist));

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

// console.log(isCycle(testList))
// console.log(isCycle(CycleList))


//input: list1, 3
//output: l


function findNthEl(list, num){
  let currNode = list.head
  count = num
  while(count > 1){
    currNode = currNode.next
    count--
  }

  return currNode
}

console.log(findNthEl(list1, 3))


