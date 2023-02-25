{
    const solution = (s, skip, index) => {
        let alphabets = new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97));
        let alphabetsExceptSkip = alphabets.filter((v) => !skip.includes(v));
        return [...s]
            .map((word, i, arr) => {
            return alphabetsExceptSkip[(alphabetsExceptSkip.indexOf(word) + index) % alphabetsExceptSkip.length];
        })
            .join('');
    };
}
