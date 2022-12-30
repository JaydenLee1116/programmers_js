function solution(my_string) {
  const stringArr = my_string.split(' ');
  const numberArr = stringArr.map((value, index, array) => {
    if (value === '+') return 0;
    if (value === '-') return parseInt(array[index + 1]) * -2;
    return parseInt(value);
  });
  return numberArr.reduce((acc, cur) => acc + cur, 0);
}
