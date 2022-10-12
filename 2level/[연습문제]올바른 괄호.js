function solution(s) {
  let n = s.length;

  let sum = 0;

  if (n % 2 === 1) {
    return false;
  } else {
    s = s.split('').map((bracket) => (bracket === '(' ? 1 : -1));
    for (let num of s) {
      sum += num;
      if (sum < 0) {
        return false;
      }
    }
    let answer = sum === 0 ? true : false;
    return answer;
  }
}

// 광탈 방지 A-Z에서 내 풀이(스택 사용)
function solution(s) {
  var answer = true;
  var sLength = s.length;
  var sArray = s.split('');
  var count = 0;

  for (let i = 0; i < sLength; i++) {
    if (sArray.pop() === ')') {
      count++;
    } else {
      count--;
      if (count < 0) return false;
    }
  }

  if (count !== 0) return false;

  return answer;
}

// 광탈 방지 A-Z에서 강사님 풀이(스택 사용)
function solution(s) {
  let stack = [];

  for (const v of s) {
    if (v === '(') {
      stack.push(v);
    } else {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  return !stack.length;
}

// 광탈 방지 A-Z에서 강사님 풀이 변형(스택 개념 사용)
function solution(s) {
  let count = 0;

  for (const v of s) {
    if (v === '(') {
      count++;
    } else {
      if (!count) return false;
      count--;
    }
  }
  return !count;
}
