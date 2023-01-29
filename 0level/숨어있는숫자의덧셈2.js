{
    var solution = function (my_string) {
        return my_string
            .replace(/[A-z]/g, ',')
            .split(',')
            .reduce(function (acc, cur) {
            return cur === '' ? acc : acc + parseInt(cur);
        }, 0);
    };
}
