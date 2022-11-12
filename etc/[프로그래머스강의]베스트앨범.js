function solution(genres, plays) {
  let answer = [];
  let genresPlays = {};
  let musics = {};

  for (let i = 0; i < genres.length; i++) {
    if (!musics[genres[i]]) {
      musics[genres[i]] = [{ id: i, play: plays[i] }];
    } else {
      musics[genres[i]].push({ id: i, play: plays[i] });
    }
    if (!genresPlays[genres[i]]) {
      genresPlays[genres[i]] = plays[i];
    } else {
      genresPlays[genres[i]] += plays[i];
    }
  }

  let genresOrder = Object.entries(genresPlays)
    .sort((a, b) => b[1] - a[1])
    .map((genrePlay) => genrePlay[0]);

  for (let genre of genresOrder) {
    answer.push(
      ...musics[genre]
        .sort((a, b) => a.id - b.id)
        .sort((a, b) => b.play - a.play)
        .slice(0, 2)
        .map((music) => music.id)
    );
  }

  return answer;
}
