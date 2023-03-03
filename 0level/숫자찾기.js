{
    const solution = (num, k) => {
        const str = String(num);
        const j = String(k);
        if (str.includes(j))
            return str.indexOf(j) + 1;
        return -1;
    };
}
