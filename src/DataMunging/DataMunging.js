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
    let minTempSpread_idx = null;
    let minTempSpread = null;
    for (let i = 0; i < data.length; i++) {
        if (minTempSpread_idx === null || data[i][0]-data[i][1] < minTempSpread) {
            minTempSpread_idx = i;
            minTempSpread = data[i][0]-data[i][1];
        }
    }

    return minTempSpread_idx + 1;
}

module.exports = {DataMunging, dayWithSmallestTempSpread};