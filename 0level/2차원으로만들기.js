{
    var solution = function (numbers, n) {
        return numbers.filter(function (num, i) { return i % n === 0; }).map(function (num, i) { return numbers.slice(i * n, (i + 1) * n); });
    };
}
