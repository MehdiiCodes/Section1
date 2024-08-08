const nums = [1, 2, 3, 4, 5, 6,];

const newNums = [];

for(let n of nums) {
    newNums.push(n+1);
}

console.log(newNums);
const sqrs = nums.map( (n) => {return n+1});
console.log(sqrs);

const evenNums = nums.filter( (n) => {return n});
console.log(evenNums);