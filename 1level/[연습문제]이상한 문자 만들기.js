function solution(s) {
  let words = s.split(' ');
  const changeUpperLower = (word) => {
    let arrWord = [...word];
    for (let i = 0; i < arrWord.length; i++) {
      arrWord[i] =
        i % 2 === 0 ? arrWord[i].toUpperCase() : arrWord[i].toLowerCase();
    }
    return arrWord.join('');
  };
  return words.map((word) => changeUpperLower(word)).join(' ');
}

/* map()의 두번째 인자인 배열의 index까지 이용
function solution(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
*/
