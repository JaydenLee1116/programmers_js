function solution(babbling) {
  const NOUNS = ['aya', 'ye', 'woo', 'ma'];
  const filteredBabbling = babbling.filter((bab) => {
    let temp = bab;
    NOUNS.forEach((NOUN) => {
      temp = temp.replaceAll(NOUN, 1);
    });
    return +temp;
  });

  return filteredBabbling.length;
}
