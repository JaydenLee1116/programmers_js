// const solution = (people, limit) => {
//   let answer = 0;
//   people.sort((a, b) => b - a);
//
//   while (true) {
//     let min = people.pop();
//
//     if (people[people.length - 1] + min > limit) {
//       answer += people.length + 1;
//       break;
//     }
//
//     for (let i = 0; i < people.length; i++) {
//       if (people[i] + min <= limit) {
//         people.splice(i, 1);
//         answer++;
//         break;
//       }
//     }
//   }
//   return answer;
// };

// const solution = (people, limit) => {
//   let answer = 0;
//   people.sort((a, b) => b - a);
//   let biggerCount = 0;
//   for (let i = 0; i < people.length - 1; i++) {
//     for (let j = people.length - 1; j > i; j--) {
//       if (people[i] + people[j] <= limit) {
//         answer++;
//         biggerCount++;
//         people.splice(j, 1);
//       }
//     }
//   }
//   answer += people.length - biggerCount;
//   return answer;
// };

const solution = (people, limit) => {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    let min = people[0];
    let max = people[people.length - 1];
    if (min + max <= limit) {
      people.shift();
    }
    people.pop();
    answer++;
  }

  return answer;
};
