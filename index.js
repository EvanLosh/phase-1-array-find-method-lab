// code your solution here
const record = [
    { year: "2015", result: "L" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
]

function isWin(element, index, array) {
    return element.result === "W";
}

function superbowlWin(x) {
    if (x.find(isWin)) {
        return ((x.find(isWin))).year;
    }
}

console.log(superbowlWin(record));