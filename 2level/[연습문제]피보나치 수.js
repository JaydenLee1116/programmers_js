// function solution(n) {
//     const fibonacci = (n) => {
//         if (n === 0) {
//             return 0;
//         } else if (n === 1) {
//             return 1;
//         } else {
//             return fibonacci(n - 2) % 1234567 + fibonacci(n - 1) % 1234567;
//         }
//     }

//     return fibonacci(n) % 1234567;
// }

function solution(n) {
  let fibonacciArr = new Array(n + 1);
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    fibonacciArr[i] = (fibonacciArr[i - 2] + fibonacciArr[i - 1]) % 1234567;
  }

  return fibonacciArr[n];
}
