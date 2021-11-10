const DataMunging = require('./DataMunging');

describe('Data Munging', () => {
    it('should parse the weather.dat into an array with objects', () => {
        // Foo Bar Bar2
        // 1   2    10
        // 2   3    20

        const arr = DataMunging('src/DataMunging/test.dat')
        const row1 = [2, 10]
        const row2 = [3, 20]
        expect(arr).toEqual([row1, row2])
    })
})