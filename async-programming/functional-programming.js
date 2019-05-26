let data = [
  { type: 'dog', age: 1 },
  { type: 'cat', age: 2 }
];
// sum all of the dogs ages in dog years
let ages = data
  .filter((animal) => {
    return animal.type === 'dog';
}).map((animal) => {
    return animal.age * 7
}).reduce((sum, animal) => {
    return sum + animal.age;
});
console.log('Dog years age: ' + ages);
