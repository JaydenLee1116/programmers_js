function solution(spell, dic) {
  let filterArr = dic;
  spell.forEach((spelling) => {
    filterArr = filterArr.filter((word) => {
      let count = 0;
      word.split('').forEach((v) => (v === spelling ? count++ : null));
      return count === 1;
    });
  });
  return filterArr.length ? 1 : 2;
}

// 아래는 dic 내의 단어에 spell의 글자가 여러개 쓰여도 되는 경우(테스트로는 통과되지만 문제에서는 하나씩만 사용되라고 되어있음)
// function solution(spell, dic) {
//   let filterArr = dic;
//   spell.forEach((spelling) => {
//     filterArr = filterArr.filter((word) => word.includes(spelling));
//   });
//   return filterArr.length ? 1 : 2;
// }
