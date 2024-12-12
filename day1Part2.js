/*

after getting the same 2 arrays, multiply each num in list 1 by how many times it repeats in list 2
sum the final list 1

*/

const { problemInput } = require("./day1Input");
let inputString = problemInput.trim().split("\n");

let numList1 = [];
let numList2 = [];

let temporaryArr = [];
for (let i = 0; i < inputString.length; i++) {
  temporaryArr.push(inputString[i].split("   "));
}

for (let x = 0; x < temporaryArr.length; x++) {
  numList1.push(parseInt(temporaryArr[x][0]));
  numList2.push(parseInt(temporaryArr[x][1]));
}

let count = 0;
let register = {};
let filteredArr = [];

// let uniqueNumList1 = numList1.filter((item, i, ar) => ar.indexOf(item) === i);

for (let x = 0; x < numList1.length; x++) {
  const index = numList1[x];

  register[index] = { index, repeats: 0 };

  numList2.forEach((el) => {
    if (el === index) {
      register[index].repeats += 1;
    } else {
      register[index].repeats += 0;
    }
  });

  filteredArr.push(parseInt(index) * register[index].repeats);
}

let totalNumList1 = filteredArr.reduce((partialSum, a) => partialSum + a, 0);

console.log(totalNumList1);

/*
get only unique nums from num list 1
 so that the 3 can loop 3 times 
 instead of 3 3 3 loop 1 time each that results to 3*1
 we want 3 * 3 
 
 use this to get new unique arr
 
 let unique = a.filter((item, i, ar) => ar.indexOf(item) === i)
 */
