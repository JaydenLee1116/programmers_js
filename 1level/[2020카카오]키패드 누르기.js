function solution(numbers, hand) {
  let leftPosition = [0, 3];
  let rightPosition = [2, 3];
  let leftColumn = [1, 4, 7];
  let centerColumn = [2, 5, 8, 0];
  let rightColumn = [3, 6, 9];
  let total = [leftColumn, centerColumn, rightColumn];
  let result = '';

  for (let num of numbers) {
    if (leftColumn.includes(num)) {
      result += 'L';
      leftPosition = [0, leftColumn.indexOf(num)];
    } else if (rightColumn.includes(num)) {
      result += 'R';
      rightPosition = [2, rightColumn.indexOf(num)];
    } else {
      // 2, 5, 8, 0 인 경우
      let centerPosition = [1, centerColumn.indexOf(num)];
      let leftDistance =
        Math.abs(leftPosition[0] - centerPosition[0]) +
        Math.abs(leftPosition[1] - centerPosition[1]);
      let rightDistance =
        Math.abs(rightPosition[0] - centerPosition[0]) +
        Math.abs(rightPosition[1] - centerPosition[1]);
      if (leftDistance < rightDistance) {
        result += 'L';
        leftPosition = [1, centerColumn.indexOf(num)];
      } else if (leftDistance > rightDistance) {
        result += 'R';
        rightPosition = [1, centerColumn.indexOf(num)];
      } else {
        // 양손의 거리가 같은 경우
        if (hand === 'left') {
          result += 'L';
          leftPosition = [1, centerColumn.indexOf(num)];
        } else {
          result += 'R';
          rightPosition = [1, centerColumn.indexOf(num)];
        }
      }
    }
  }
  return result;
}
