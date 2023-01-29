var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    var solution = function (s) {
        var alphabets = __spreadArray([], new Set(__spreadArray([], s, true)), true);
        var result = [];
        alphabets.forEach(function (a) {
            var regex = new RegExp("[".concat(a, "]"), 'g');
            if (s.length - s.replace(regex, '').length === 1) {
                result.push(a);
            }
        });
        return result.sort().join('');
    };
}
