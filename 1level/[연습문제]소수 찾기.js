function solution(n) {
  let filterArr = [...new Array(n + 1).keys()];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (filterArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        filterArr[j] = false;
      }
    }
  }
  return filterArr.filter((x) => !!x === true).length - 1;
}
