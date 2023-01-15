const calculateTotalDays = (year, month, day) => {
  return year * 12 * 28 + month * 28 + day;
};

const solution = (today, terms, privacies) => {
  today = today.split('.').map((v) => +v);
  const todayTotalDay = calculateTotalDays(...today);
  const termsInformation = {};
  terms.map((term) => term.split(' ')).forEach((term) => (termsInformation[term[0]] = +term[1]));
  privacies = privacies.map((privacy) =>
    privacy.split(' ').map((v, i) => {
      if (i === 0) return v.split('.').map((t) => +t);
      return v;
    }),
  );

  return privacies
    .map((privacy, index, array) => {
      const privateTotalDay = calculateTotalDays(...privacy[0]);
      const privateTermDay = termsInformation[privacy[1]] * 28;
      return todayTotalDay > privateTotalDay + privateTermDay - 1 ? index + 1 : null;
    })
    .filter((v) => v);
};
