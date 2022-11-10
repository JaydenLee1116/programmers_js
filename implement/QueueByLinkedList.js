/*
연결리스트로 큐 구현
조금 연습해보니, 연결리스트로 구현하는 게 더 편하다?!
 */
class Node {
  constructor(newValue) {
    this.value = newValue;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    let newNode = new Node(newValue);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  peek() {
    return this.head.value;
  }
}
