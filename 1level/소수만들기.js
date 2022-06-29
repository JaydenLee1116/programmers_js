function solution(nums) {
  var answer = 0;
  let sumAll = [];
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        sumAll.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (let sum of sumAll) {
    let temp = 1;
    for (let j = 2; j < sum; j++) {
      if (sum % j === 0) {
        temp = 0;
        break;
      }
    }
    answer += temp;
  }
  return answer;
}
