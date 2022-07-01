function solution(lottos, win_nums) {
  let best = 0;
  let worst = 0;

  for (let i = 0; i < 6; i++) {
    if (win_nums.includes(lottos[i]) || lottos[i] === 0) {
      best++;
    }
    if (win_nums.includes(lottos[i])) {
      worst++;
    }
  }
  return [best >= 2 ? 7 - best : 6, worst >= 2 ? 7 - worst : 6];
}
