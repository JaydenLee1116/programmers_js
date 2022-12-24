function solution(id_pw, db) {
  let [id, pw] = id_pw;
  let login = 'fail';
  for (let value of db) {
    let dbId = value[0];
    let dbPw = value[1];
    if (id === dbId && pw === dbPw) {
      login = 'login';
      break;
    } else if (id === dbId) {
      login = 'wrong pw';
      break;
    }
  }
  return login;
}

// Map 사용한 풀이
// function solution(id_pw, db) {
//   const [id, pw] = id_pw;
//   const map = new Map(db);
//   return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
// }
