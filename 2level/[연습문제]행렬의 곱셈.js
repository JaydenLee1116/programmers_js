function solution(arr1, arr2) {
  // arr1 -> p * q , arr2 -> q * r
  let p = arr1.length;
  let q = arr2.length;
  let r = arr2[0].length;

  let answer = new Array(p);
  for (let i = 0; i < p; i++) {
    answer[i] = new Array(r).fill(0);
  }

  for (let i = 0; i < p; i++) {
    let row1 = arr1[i];
    for (let j = 0; j < q; j++) {
      let first = row1[j];
      let row2 = arr2[j];
      for (let k = 0; k < r; k++) {
        let second = row2[k];
        answer[i][k] += first * second;
      }
    }
  }
  return answer;
}
