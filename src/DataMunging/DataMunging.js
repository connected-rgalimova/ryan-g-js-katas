const fs = require('fs');

const DataMunging = (path) => {
    const array = fs.readFileSync(path).toString().split("\n");
    array.splice(0,2);
    const returnArray = [];
    for (const item of array) {
        splittedItem = item.split(" ").filter(cell => cell !== "");
        splittedItem.splice(0,1);

        returnArray.push(splittedItem.map(cell => parseInt(cell)));
    }

    return returnArray;
}

const helperFunction = (data, max_idx, min_idx) => {
    let minDifference_idx = [];
    let minDifference = [];
    for (let i = 0; i < data.length; i++) {
        const curDifference = data[i][max_idx] - data[i][min_idx];
        if (minDifference_idx.length === 0 || minDifference.length === 0 || curDifference === minDifference[0]) {
            minDifference_idx.push(data[i][0]);
            minDifference.push(curDifference);
        } else if (curDifference < minDifference[0]) {
            minDifference_idx = [data[i][0]];
            minDifference = [curDifference];
        }
    }

    if (minDifference_idx.length > 1) {
        throw `there is more than 1 minimum difference`;
    }

    return minDifference_idx[0];
}

const dayWithSmallestTempSpread = (data) => {

    return helperFunction(data, 1, 2);
}

const teamWithSmallestGoalSpread = (data) => {
    
    return helperFunction(data,5, 7);
} 

module.exports = {DataMunging, dayWithSmallestTempSpread, teamWithSmallestGoalSpread};