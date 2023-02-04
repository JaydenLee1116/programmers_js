{
    const solution = (str) => {
        return [...str].filter((w, i, arr) => arr.indexOf(w) === i).join('');
    };
}
