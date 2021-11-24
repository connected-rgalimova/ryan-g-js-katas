const {DataMunging, dayWithSmallestTempSpread} = require('./DataMunging');

describe('Data Munging', () => {
    it('should parse the weather.dat into an array with objects', () => {
        // Foo Bar Bar2
        // 1   2    10
        // 2   3    20

        const arr = DataMunging('src/DataMunging/test.dat')
        const row1 = [88, 59]
        const row2 = [79, 63]
        expect(arr).toEqual([row1, row2])
    })

    // write a program to output the day number (column one) 
    // with the smallest temperature spread
    // (the maximum temperature is the second column, the minimum the third column).
})

describe('dayWithSmallestTempSpread', () => {
    it('should return day  number (column one) with smallest temperature spread', () => {
        const weatherData = [
            [100, 50], // day 1
            [55, 50], // day 2, smallest spread
            [75, 50], // day 3
        ];

        const result = dayWithSmallestTempSpread(weatherData);

        expect(result).toEqual(2);
    });
});