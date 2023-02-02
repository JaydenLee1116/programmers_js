{
    var solution = function (before, after) {
        var afterArr = after.split('');
        for (var i = 0; i < before.length; i++) {
            if (afterArr.indexOf(before[i]) >= 0) {
                afterArr.splice(afterArr.indexOf(before[i]), 1);
            }
        }
        return afterArr.length ? 0 : 1;
    };
}
/**
 * function solution(before, after) {
 *     return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
 * }
 */
