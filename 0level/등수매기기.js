const average = (arr) => (arr[0] + arr[1]) / 2;

function solution(score) {
  const scoreDictionary = {};
  score
    .map(average)
    .sort((a, b) => b - a)
    .forEach((averageScore, i) => {
      scoreDictionary[averageScore] ? null : (scoreDictionary[averageScore] = i + 1);
    });
  return score.map((arr) => scoreDictionary[average(arr)]);
}

// 인상 깊은 풀이
// function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }
