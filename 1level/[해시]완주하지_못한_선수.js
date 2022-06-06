function solution(participant, completion) {
  let answer;
  for (let man of participant) {
    if (completion.includes(man)) {
      completion.splice(completion.indexOf(man), 1);
    } else {
      answer = man;
    }
  }
  return answer;
}

function solution(participant, completion) {
  let answer;
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
