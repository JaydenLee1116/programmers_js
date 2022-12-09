function solution(lines) {
  lines = lines.map((line) => line.map((number) => number + 100)); // 숫자를 0 ~ 200 범위를 갖도록 해준다.
  let totalArray = new Array(300).fill(0); // 그냥 넉넉히 채운다.(어차피 필터할거니까)
  lines.forEach((line) => {
    for (let i = line[0]; i < line[1]; i++) {
      totalArray[i]++;
    }
  });
  let answer = totalArray.filter((number) => number >= 2).length;
  return answer;
}
