"use strict";
{
    const solution = (s) => {
        const alphabets = [...new Set([...s])];
        const result = [];
        alphabets.forEach((a) => {
            const regex = new RegExp(`[${a}]`, 'g');
            if (s.length - s.replace(regex, '').length === 1) {
                result.push(a);
            }
        });
        return result.sort().join('');
    };
}
