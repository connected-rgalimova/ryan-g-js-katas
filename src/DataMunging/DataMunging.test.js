const {DataMunging, dayWithSmallestTempSpread, teamWithSmallestGoalSpread} = require('./DataMunging');

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
/*
Part Two: Soccer League Table
The file football.dat contains the results from the English Premier League for 2001/2. 
The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and against each team 
in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them). 
Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ 
goals.
*/

describe('teamWithSmallestGoalSpread', () => { 
    it('should return the name of the team with the smallest difference in ‘for’ and ‘against’ goals', () => {
        const teamData = [
            ['Arsenal', '38', '26', '9', '3', '79', '-', '36', '87'],
            ['Liverpool', '38', '24', '8', '6', '67', '-', '30', '80'],
            ['Manchester_U', '38', '24', '5', '9', '87', '-', '45', '77'],
        ];

        const result = teamWithSmallestGoalSpread(teamData);

        expect(result).toEqual('Liverpool');
    })
});

describe('dayWithSmallestTempSpread', () => {
    it('should return day  number (column one) with smallest temperature spread', () => {
        const weatherData = [
            [1, 100, 50], // day 1
            [2, 55, 50], // day 2, smallest spread
            [3, 75, 50], // day 3
        ];

        const result = dayWithSmallestTempSpread(weatherData);

        expect(result).toEqual(2);
    });
    it('should return error if there is more than 1 day that has the same temp spread', () => {
        const weatherData = [
            [1, 100, 50], // day 1
            [2, 55, 50], // day 2, smallest spread
            [3, 75, 50], // day 3
            [4, 60, 55], // day 4, smallest spread
        ];

        // const result = dayWithSmallestTempSpread(weatherData);

        expect(() => dayWithSmallestTempSpread(weatherData)).toThrowError('there is more than 1 minimum difference');
    });
});