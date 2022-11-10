// 배열로 구현하기
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// shift 함수를 사용하여 큐를 구현하는 것은 옳지 않다.
// 왜냐하면 shift 함수 자체가 O(N)이기 때문이다!
