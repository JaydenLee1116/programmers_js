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

function solution(priorities, location) {
  var answer = 0;
  let queue = new Queue();
  priorities.forEach((priority, i) => queue.enqueue([priority, i]));
  priorities.sort((a, b) => b - a);

  let count = 0;

  while (queue.size > 0) {
    if (queue.peek()[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      let value = queue.dequeue();
      count++;
      if (value[1] === location) {
        return count;
      }
    }
  }
}
