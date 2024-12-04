let inputString = `
3   4
4   3
2   5
1   3
3   9
3   3`;

const numList1 = [];
const numList2 = [];

let temporaryArr = [];
for (let i = 0; i < inputString.length; i++) {
  temporaryArr.push(inputString[i].split("   "));
}
