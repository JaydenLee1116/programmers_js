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
