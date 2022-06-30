function solution(new_id) {
  const recommendationId = (id) => {
    // 1단계. 대문자 -> 소문자
    id = id.toLowerCase();
    // 2단계. 알파벳, 숫자, -, _, . 제외 모두 제거
    let re = /[^a-z0-9-_.]/g;
    id = id.replace(re, '');
    // 3단계. 마침표 2번 이상 연속을 하나로 치환
    re = /[.][.]+/g;
    id = id.replace(re, '.');
    // 4단계. 마침표 처음 혹은 끝에 위치한다면 제거
    id = [...id];
    if (id[0] === '.') {
      id.shift();
    }
    if (id[id.length - 1] === '.') {
      id.pop();
    }
    id = id.join('');
    console.log(id);
    // 5단계. 아이디 빈문자열이면 'a'
    if (id.length === 0) {
      id = 'a';
    }
    // 6단계. 아이디 16자 이상인 경우 첫 15개만 남기기
    if (id.length >= 16) {
      id = id.slice(0, 15);
      if (id[id.length - 1] === '.') {
        id = [...id];
        id.pop();
        id = id.join('');
      }
    }
    // 7단계. 길이가 2자 이하라면 끝 문자를 3이 될 때까지 반복해서 붙인다.
    if (id.length <= 2) {
      id = [...id];
      let endword = id[id.length - 1];
      while (id.length < 3) {
        id.push(endword);
      }
      id = id.join('');
    }
    return id;
  };
  return recommendationId(new_id);
}
