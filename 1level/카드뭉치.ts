{
  const solution = (cards1: string[], cards2: string[], goal: string[]) => {
    while (goal.length) {
      if (goal[0] === cards1[0]) {
        goal.shift();
        cards1.shift();
      } else if (goal[0] === cards2[0]) {
        goal.shift();
        cards2.shift();
      } else {
        return 'No';
      }
    }
    return 'Yes';
  };
}
