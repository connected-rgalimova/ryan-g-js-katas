class StringCalculator {
    static add(str) {
        if (str === '') {
            return 0;
        }
        if(str.match(/,|\n/g))
        if (str.includes(',')) {
            return StringCalculator.sumWithDelimiter(str, ',');
        }
        if (str.includes("\n")) {
            return StringCalculator.sumWithDelimiter(str, "\n");
        };
        return Number(str);
    }

    static sumWithDelimiter(str, newLocal_1) {
        const str_arr = str.split(newLocal_1);
        return str_arr.reduce((init, ele) => {
            init += Number(ele);
            return init;
        }, 0);
    }
}

module.exports = StringCalculator;
