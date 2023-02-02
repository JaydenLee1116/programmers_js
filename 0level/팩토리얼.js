{
    var solution = function (number) {
        var factorial = function (num) {
            return new Array(num)
                .fill(0)
                .map(function (_, i) { return i + 1; })
                .reduce(function (acc, cur) { return acc * cur; });
        };
        return new Array(10)
            .fill(0)
            .map(function (_, i) { return i + 1; })
            .map(factorial)
            .filter(function (n) { return n <= number; }).length;
    };
}
