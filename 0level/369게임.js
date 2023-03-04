{
    const solution = (order) => {
        const str = order.toString();
        let answer = 0;
        for (let word of [...str]) {
            if (word === '3' || word === '6' || word === '9') {
                answer++;
            }
        }
        return answer;
    };
}
