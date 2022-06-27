function solution(n, arr1, arr2) {
  let arr1Change;
  let arr2Change;

  arr1Change = arr1.map((num) => {
    let temp = '';
    for (let i = n - 1; i >= 0; i--) {
      temp += String(Math.floor(num / 2 ** i));
      num = num % 2 ** i;
    }
    return temp;
  });

  arr2Change = arr2.map((num) => {
    let temp = '';
    for (let i = n - 1; i >= 0; i--) {
      temp += String(Math.floor(num / 2 ** i));
      num = num % 2 ** i;
    }
    return temp;
  });

  let arrSum = [];
  for (let i = 0; i < n; i++) {
    arrSum.push(Number(arr1Change[i]) + Number(arr2Change[i]));
  }

  let arrNum = arrSum.map((x) => String(x).padStart(n, '0'));
  return arrNum.map((x) => x.replace(/[12]/g, '#').replace(/0/g, ' '));
}
