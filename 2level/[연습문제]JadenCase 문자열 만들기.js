// function solution(s) {
//     s = s.toLowerCase();
//     let words = s.split(' ');
//     let answer = [];

//     for (let word of words) {
//         if (word === '') {
//             continue;
//         } else {
//             word = word[0].toUpperCase() + word.slice(1);
//             answer.push(word);
//         }
//     }
//     return answer.join(' ');
// }

function solution(s) {
  s = s.split(' ').map((el) => el.toLowerCase());

  s = s.map((v) => {
    v = v.split('');

    if (v[0] === undefined) return;
    v[0] = v[0].toUpperCase();

    return v.join('');
  });

  return s.join(' ');
}
