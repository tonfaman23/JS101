console.log("Functions")

const nuggetizer = (animal) => {
 const output= `processed ${animal}`   
 return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('tire'));

const dogBreed = (breed) => {
   return `my favorite dog breed is ${breed}`
};

console.log(dogBreed('lab'));