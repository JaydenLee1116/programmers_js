/* 
연결리스트로 스택 구현
*/

class Node {
  constructor(newValue) {
    this.value = newValue;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(newValue) {
    let newNode = new Node(newValue);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }
  peek() {
    return this.top.value;
  }
}
