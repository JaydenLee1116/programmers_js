var solution = function (array) {
    return array
        .map(function (n) {
        return n
            .toString()
            .split('')
            .filter(function (v) { return v === '7'; }).length;
    })
        .reduce(function (acc, cur) { return acc + cur; });
};
