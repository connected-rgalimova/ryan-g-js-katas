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
        console.log(curDayTempSpread);
        if (minTempSpread_idx.length === 0 || minTempSpread.length === 0 || curDayTempSpread < minTempSpread[0]) {
            minTempSpread_idx.push(i);
            minTempSpread.push(curDayTempSpread);
        }
    }

    return minTempSpread_idx[0] + 1;
}

module.exports = {DataMunging, dayWithSmallestTempSpread};