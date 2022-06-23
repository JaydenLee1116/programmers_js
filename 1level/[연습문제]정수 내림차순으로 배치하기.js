function solution(n) {
  // 기본 버블정렬
  // let arr = [...String(n)].map((x) => Number(x));
  // for (let i = arr.length - 1; i >= 1; i--) {
  //     for (let j = 0; j <= i; j++) {
  //         if (arr[j] < arr[j+1]) {
  //             let temp = arr[j+1];
  //             arr[j+1] = arr[j];
  //             arr[j] = temp;
  //         }
  //     }
  // }
  // return Number(arr.join(''));

  // 선택정렬
  // arr = [...String(n)].map((x) => Number(x));
  // for (let i = 0; i < arr.length - 1; i++) {
  //   let indexMax = i;
  //   for (let j = i; j < arr.length; j++) {
  //     if (arr[j] > arr[indexMax]) {
  //       indexMax = j;
  //     }
  //   }
  //   let temp = arr[i];
  //   arr[i] = arr[indexMax];
  //   arr[indexMax] = temp;
  // }
  // return Number(arr.join(''));

  // 내장함수 이용
  return Number(
    [...String(n)]
      .map((x) => Number(x))
      .sort((a, b) => b - a)
      .join('')
  );
}
