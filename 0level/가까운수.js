{
    var solution = function (array, n) {
        array.sort(function (a, b) { return a - b; });
        var differences = array.map(function (num) { return Math.abs(num - n); });
        var indexOfMinimumDifference = differences.indexOf(Math.min.apply(Math, differences));
        return array[indexOfMinimumDifference];
    };
}
