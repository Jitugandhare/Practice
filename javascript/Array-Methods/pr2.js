const users = [
  { name: 'alice', age: 25 },
  { name: 'bob', age: 30 },
  { name: 'meet', age: 30 },
  { name: 'mark', age: 30 },
];


let res=users.map(i=>i.name.charAt(0).toUpperCase()+i.name.slice(1))
console.log(res)