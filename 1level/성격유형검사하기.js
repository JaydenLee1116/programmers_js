const solution = (survey, choices) => {
  const firstCharacters = { R: 0, T: 0 };
  const secondCharacters = { C: 0, F: 0 };
  const thirdCharacters = { J: 0, M: 0 };
  const fourthCharacters = { A: 0, N: 0 };
  const totalCharacters = [firstCharacters, secondCharacters, thirdCharacters, fourthCharacters];
  survey.forEach((value, index) => {
    // value: RT
    let score = choices[index];
    if (score < 4) {
      let scoredCharacter = value[0];
      totalCharacters.find((characters) => Object.keys(characters).includes(scoredCharacter))[scoredCharacter] +=
        4 - score;
    } else if (score > 4) {
      let scoredCharacter = value[1];
      totalCharacters.find((characters) => Object.keys(characters).includes(scoredCharacter))[scoredCharacter] +=
        score - 4;
    }
  });
  const answer = totalCharacters.map((characters) => {
    let selectedCharacter = Object.keys(characters).filter(
      (character) => characters[character] === Math.max(...Object.values(characters)),
    )[0];
    return selectedCharacter;
  });
  return answer.join('');
};

/*
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT","CF","JM","AN"];

  types.forEach((type) =>
    type.split('').forEach((char) => MBTI[char] = 0)
  )

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
*/
