/*
트리: 방향 그래프의 일종, 정점을 가리키는 간선이 하나밖에 없는 구조 ex) 조직도, 디렉토리 구조

루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
정점이 N개인 트리는 반드시 N-1개의 간선을 가진다.
루트에서 특정 정점으로 가는 경로는 유일하다.

이진트리: 알고리즘에서 자주 사용되므로 잘 알고 있도록 한다.
각 정점이 최대 2개의 자식을 가지는 트리를 의미한다.
정점이 N개인 이진트리는 최악의 경우 높이가 N이 될 수 있다.(한쪽으로 쭉 쏠려서 리스트처럼 생김)
정점이 N개인 포화 또는 완전 이진트리의 높이는 log N이다.
높이가 h인 포화 이진 트리는 (2^h - 1)개의 정점을 가진다.
일반적인 이진 트리를 사용하는 경우는 많지 않다.(주로 아래 4개의 경우로 사용된다.)
- 이진 탐색 트리
- 힙
- AVL 트리
- 레드 블랙 트리
*/

class QueueNode {
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
    let newNode = new QueueNode(newValue);
    if (this.tail === null) {
      this.head = this.tail = newNode;
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
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new TreeNode(9));

tree.root.left = new TreeNode(3);
tree.root.right = new TreeNode(8);
tree.root.left.left = new TreeNode(2);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(7);
tree.root.right.right = new TreeNode(4);

console.log(tree);
