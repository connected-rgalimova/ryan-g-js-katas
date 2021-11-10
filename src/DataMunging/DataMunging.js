const fs = require('fs');

const DataMunging = (path) => {
    const array = fs.readFileSync(path).toString().split("\n");
    array.splice(0,1);
    const returnArray = [];
    for (const item of array) {
        splittedItem = item.split(" ").filter(cell => cell !== "");
        splittedItem.splice(0,1);

        returnArray.push(splittedItem.map(cell => parseInt(cell)));
    }

    return returnArray;
}

module.exports = DataMunging;