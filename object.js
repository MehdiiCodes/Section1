const user = {
    name : 'Akbar',
    email : 'akbar@gmail.com',
    password : 'abc@123'
};

console.log(user.email);
console.log(user['name']);

user.email = 'akbar2627@gmail.com';
console.log(user);

user.adress = 'Lucknow';
console.log(user);

console.log( Object.keys(user));
console.log( Object.values(user));
console.log( Object.entries(user));

const brand = 'Samsung';
const model = 'J2';
const price = 9000;
const color = ['black', 'gray', 'white', 'blue'];

const smartphone = { brand, model, price, color};
console.log(smartphone);

const { adress } = user;
console.log(adress);


console.log(smartphone.price);
console.log(smartphone.color[1]);

smartphone.color.push('yellow');
console.log(smartphone);

smartphone.color[2] = 'moonwhite';
console.log(smartphone);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'J2',
        price: 9000,
        colors: ['red', 'black', 'white']
    },
    {
        brand: 'Nokia',
        model: 'keypad',
        price: 2000,
        colors: ['green', 'yellow', 'pink']
    },
    {
        brand: 'RealMe',
        model: 'Realm8',
        price: 19000,
        colors: ['silver', 'dark', 'blue']
    },
    {
        brand: 'Google',
        model: 'Pixel',
        price: 119000,
        colors: ['red', 'black', 'white']
    },
    {
        brand: 'Apple',
        model: 'Iphone15',
        price: 100000,
        colors: ['navyblue', 'light', 'wmaroon']
    }
];

console.log(smartphoneList[4].price);

console.log(smartphoneList[3].colors.at(-1));


//filter phones less than 50000.
const myphones = smartphoneList.filter (( phone ) => { return phone.price<=50000} );
console.log(myphones);


//const query = 'sam';
//const SamsungPhone = smartphoneList.filter (( phone ) => { return phone.brand.toLocaleLowerCase().includes(query.toLocaleLowerCase())} );
//console.log(samsungPhone);

console.log([2, 3, 4].includes(3));