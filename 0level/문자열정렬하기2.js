{
    const solution = (my_string) => {
        return [...my_string.toLocaleLowerCase()].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    };
}
