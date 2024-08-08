const nums = [ 1, 4, 16, 63, 36, 52, 18, 17, 81];
const perfect= [];

for (let i of nums) {
    if(Number.isInteger(i ** 0.5)){
        // console.log(i);
        perfect.push(i);
    }
}

console.log(perfect);

const prices = [100, 210, 280, 399, 500];
const discounted = [];

for(let p of prices){
    discounted.push(p * 0.9);
}

console.log(discounted);

const discountedPrices = prices.map((p) => { return p * 0.9 });
console.log(discountedPrices);

const sqrNums = nums.map((n) => { return n**2});

console.log(sqrNums);

const perfectNums = nums.filter ((n) => { return Number.isInteger(n ** 0.5)});
console.log(perfectNums);

const prices2 = ['₹423.23', '₹123.452', '₹678.9', '₹999.9982'];
const intPrices = prices2.map( (p) => { return parseInt(p.slice(1))});
console.log(intPrices);

const names = ['ramu', 'shamu', 'pinki', 'kaliya']
//create an array in uppercase names