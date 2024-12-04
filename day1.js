// there are 2 arrays of numbers
// get smallest number from both and calculate distance between them
// get 2nd smallest number from both and calculate distance and so on
// sum all distances to get result

const { problemInput } = require("./day1Input");
let inputString = problemInput.trim().split("\n");

const numList1 = [];
const numList2 = [];
const distancesArr = [];

let temporaryArr = [];
for (let i = 0; i < inputString.length; i++) {
  temporaryArr.push(inputString[i].split("   "));
}

for (let x = 0; x < temporaryArr.length; x++) {
  numList1.push(parseInt(temporaryArr[x][0]));
  numList2.push(parseInt(temporaryArr[x][1]));
}

function getDistance(arr1, arr2) {
  while (arr1.length > 0) {
    let pair = [];
    pair.push(findMin(arr1));
    pair.push(findMin(arr2));

    const index1 = arr1.indexOf(pair[0]);
    const index2 = arr2.indexOf(pair[1]);

    if (index1 > -1 && index2 > -1) {
      arr1.splice(index1, 1);
      arr2.splice(index2, 1);
    }

    pairDistance = handlePairDistance(pair);

    distancesArr.push(pairDistance);
  }
  const totalDistance = distancesArr.reduce((a, b) => a + b, 0);

  return totalDistance;
}

function findMin(arr) {
  const min = Math.min(...arr);
  return min;
}

function handlePairDistance(arr) {
  return Math.abs(arr[0] - arr[1]);
}

console.log(getDistance(numList1, numList2));
