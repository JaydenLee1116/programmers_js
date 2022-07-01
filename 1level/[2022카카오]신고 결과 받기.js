function solution(id_list, report, k) {
  // id_list의 각 유저를 key, []를 value로 갖는 객체를 만든다.
  // report의 값들에 대해 split하고 0번째 요소를 key로 가질 때 위의 객체의 value에 1번째 요소를 push한다.
  let reportList = {};
  for (let id of id_list) {
    reportList[id] = [];
  }

  for (let value of report) {
    let [reporting, reported] = value.split(' ');
    if (reportList[reporting].includes(reported)) {
      continue;
    } else {
      reportList[reporting].push(reported);
    }
  }

  let reportedTotal = Object.values(reportList).flat();
  let reportedCount = {};
  for (let id of id_list) {
    reportedCount[id] = 0;
  }

  for (let reportedId of reportedTotal) {
    reportedCount[reportedId]++;
  }

  for (let [key, value] of Object.entries(reportList)) {
    reportList[key] = value.map((x) => reportedCount[x]).filter((x) => x >= k);
  }

  let answer = id_list.map((x) => reportList[x].length);
  return answer;
}
