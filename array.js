const arr1 = ['hello', 12434, false, null];

console.log(arr1);

console.log(typeof arr1);
console.log(Array.isArray(arr1));

const movies = ['Dangal', 'Kill', 'PK', 'Manji', 'DDLJ', 'Jawan' ];
console.log(movies.length);

console.log( movies[3]);
console.log( movies.at(2));
console.log( movies.at(-2));

movies[3] = 'krish'

console.log(movies);

console.log(movies.indexOf('Kill'));


console.log(movies);

console.log(movies.slice(2, 60));

// ADDING AND REMOVING ELEMENTS


movies.push('Kalki');
console.log(movies);

movies.unshift('KGF');
console.log(movies);

movies.pop();
movies.shift();

console.log(movies);

movies.splice(3, 0, 'deadpool'); // removes 2 elements starting from index 3
console.log(movies);