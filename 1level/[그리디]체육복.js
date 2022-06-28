function solution(n, lost, reserve) {
  let answer = 0;
  let students = new Array(n + 1).fill(1);
  for (let i = 1; i < n + 1; i++) {
    if (lost.includes(i)) {
      students[i]--;
    }
    if (reserve.includes(i)) {
      students[i]++;
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (students[i] === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        students[i]++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        students[i]++;
      }
    }
  }

  answer = students.filter((x) => x >= 1).length - 1;

  return answer;
}
