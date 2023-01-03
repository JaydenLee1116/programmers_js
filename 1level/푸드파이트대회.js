function solution(food) {
  const finalFood = food.map((value, index) => {
    if (!index) return value;
    if (value % 2) return value - 1;
    return value;
  });
  const resultLength = finalFood.reduce((acc, cur) => acc + cur, 0);
  let result = new Array(resultLength).fill(0);
  let count = 0;
  finalFood.forEach((value, index) => {
    if (!index) return;
    for (let i = 0; i < value / 2; i++) {
      result[i + count] = index;
      result[resultLength - 1 - i - count] = index;
    }
    count += value / 2;
  });
  return result.join('');
}
