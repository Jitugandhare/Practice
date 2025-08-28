const arr = [1, 2, 3];
const mapped = arr.map((num, index, array) => array.push(num * 2));
console.log(mapped);



const fullNames = ["John Doe", "Jane Smith"];
const firstNames =fullNames.map(i=>i.split(' ')[0])
console.log(firstNames); // ["John", "Jane"]
