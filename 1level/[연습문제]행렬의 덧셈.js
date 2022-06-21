function solution(arr1, arr2) {
  let rowCount = arr1.length;
  let columnCount = arr1[0].length;

  let answer = new Array(rowCount).fill().map((x) => new Array(columnCount));

  for (let i = 0; i < rowCount; i++)
    for (let j = 0; j < columnCount; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  return answer;
}

/* answer 선언 및 할당 시, 끝에 fill.(new Array(columnCount)) 를 하게 되면 같은 주소를 참조하는 배열들이 들어가게 되어
참조값이 변경되면 다 같이 변경된다. 해서 위와 같이 undefined로 채워주고 각 값들에 map함수를 통해 각각 다른 주소를 참조하는 객체를 리턴해서 배열을 만든다. */
