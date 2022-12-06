function solution(dots) {
  // dots = [[,], [,], [,], [,]]
  let count = 0;
  let p = dots[0];
  let q = dots[1];
  let s = dots[2];
  let t = dots[3];

  const checkParallel = (first, second, third, fourth) => {
    let left = Math.abs((first[0] - second[0]) / (first[1] - second[1]));
    let right = Math.abs((third[0] - fourth[0]) / (third[1] - fourth[1]));
    if (left === right) {
      count = 1;
    }
  };

  checkParallel(p, q, s, t);
  checkParallel(p, s, q, t);
  checkParallel(p, t, s, q);

  return count;
}
