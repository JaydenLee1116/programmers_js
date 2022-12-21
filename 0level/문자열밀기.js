function solution(A, B) {
  let arrA = A.split('');
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (arrA.join('') === B) return count;
    else {
      arrA.unshift(arrA.pop());
      count++;
    }
  }
  return -1;
}
