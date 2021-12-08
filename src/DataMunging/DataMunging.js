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

const dayWithSmallestTempSpread = (data) => {
    let minTempSpread_idx = [];
    let minTempSpread = [];
    for (let i = 0; i < data.length; i++) {
        const curDayTempSpread = data[i][0] - data[i][1];
        if (minTempSpread_idx.length === 0 || minTempSpread.length === 0 || curDayTempSpread === minTempSpread[0]) {
            minTempSpread_idx.push(i);
            minTempSpread.push(curDayTempSpread);
        } else if (curDayTempSpread < minTempSpread[0]) {
            minTempSpread_idx = [i];
            minTempSpread = [curDayTempSpread];
        }
    }

    if (minTempSpread_idx.length > 1) {
        throw 'there is more than 1 day has the smallest spread';
    }

    return minTempSpread_idx[0] + 1;
}

const teamWithSmallestGoalSpread = (data) => {
    let minGoalSpread_name = [];
    let minGoalSpread = [];
    for (let i = 0; i < data.length; i++) {
        const curGoalSpead = data[i][5] - data[i][7];
        if (minGoalSpread_name.length === 0 || minGoalSpread.length === 0 || curGoalSpead === minGoalSpread[0]) {
            minGoalSpread_name.push(data[i][0]);
            minGoalSpread.push(curGoalSpead);
        } else if (curGoalSpead < minGoalSpread[0]) {
            minGoalSpread_name = [data[i][0]];
            minGoalSpread = [curGoalSpead];
        }
    }

    if (minGoalSpread_name.length > 1) {
        throw 'there is more than 1 day has the smallest spread';
    }

    return minGoalSpread_name[0];
} 

module.exports = {DataMunging, dayWithSmallestTempSpread, teamWithSmallestGoalSpread};