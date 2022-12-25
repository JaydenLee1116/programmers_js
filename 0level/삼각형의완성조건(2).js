function solution(sides) {
  // sides = [1, 2];
  let count = 0;
  let bigSide = Math.max(...sides);
  let smallSide = Math.min(...sides);
  // 작은 변 2개 중에 1개인 경우
  for (let i = bigSide - smallSide + 1; i < bigSide; i++) {
    count++;
  }
  // 가장 큰 변인 경우
  for (let i = bigSide; i < smallSide + bigSide; i++) {
    count++;
  }
  return count;
}

// 어차피 길이는 정수라는 조건에서 가장 짧은 변이 정해지면 갯수는 한정되니까
// function solution(sides) {
//   return Math.min(...sides)*2-1
// }
