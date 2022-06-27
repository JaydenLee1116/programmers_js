function solution(nums) {
  let n = nums.length;
  let answerArr = [];
  for (let num of nums) {
    if (answerArr.find((x) => x === num)) {
      continue;
    } else {
      answerArr.push(num);
    }
  }

  return answerArr.length >= n / 2 ? n / 2 : answerArr.length;
}
