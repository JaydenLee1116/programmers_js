function solution(phone_number) {
  let answer = '';
  let count = phone_number.length;

  for (let i = 0; i < phone_number.length; i++) {
    if (count > 4) {
      answer += '*';
      count--;
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}

// 깔끔 한줄 풀이
// const solution = n => [...n].fill("*",0,n.length-4).join("")
