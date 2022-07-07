function solution(n) {
  // let answer;
  // function solve(n) {
  //     if (n === 1) {
  //         return 1;
  //     } else if (n === 2) {
  //         return 2;
  //     } else {
  //         return solve(n-2) % 1234567 + solve(n-1) % 1234567;
  //     }
  // }
  // answer = solve(n) % 1234567;
  // return answer;

  let arr = new Array(n);
  arr[0] = 1;
  arr[1] = 2;
  for (let i = 0; i < n - 2; i++) {
    arr[i + 2] = (arr[i + 1] % 1234567) + (arr[i] % 1234567);
  }
  return arr[n - 1] % 1234567;
}
