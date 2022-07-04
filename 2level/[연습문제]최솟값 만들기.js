function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  let n = A.length;
  let answer = 0;

  for (i = 0; i < n; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

/*
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
*/
