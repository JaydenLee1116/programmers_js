"use strict";
{
    const solution = (array) => {
        return array
            .map((n) => n
            .toString()
            .split('')
            .filter((v) => v === '7').length)
            .reduce((acc, cur) => acc + cur);
    };
}
