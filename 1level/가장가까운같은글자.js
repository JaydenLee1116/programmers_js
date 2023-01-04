const solution = (s) => {
  // s = banana
  let sArr = [...s];
  let answer = sArr.map((v, i, arr) => {
    let distance = arr.length;
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        let tempDistance = Math.abs(i - j);
        distance = tempDistance <= distance ? tempDistance : distance;
      }
    }
    return distance === arr.length ? -1 : distance;
  });
  return answer;
};

// function solution(s) {
//   const hash = {};
//
//   return [...s].map((v, i) => {
//     let result = hash[v] !== undefined ? i - hash[v] : -1;
//     hash[v] = i;
//     return result;
//   });
// }
