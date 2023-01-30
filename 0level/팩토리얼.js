{
    const solution = (number) => {
        const factorial = (num) => new Array(num)
            .fill(0)
            .map((_, i) => i + 1)
            .reduce((acc, cur) => acc * cur);
        return new Array(10)
            .fill(0)
            .map((_, i) => i + 1)
            .map(factorial)
            .filter((n) => n <= number).length;
    };
}
