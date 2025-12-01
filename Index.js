console.log("Maguang");
const n = 100;

console.log(n)

console.log("Maguang is 24 years old");
//String and number data types

let name = "Maguang";
let age = 24;
console.log(name);
console.log(age);

let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

let x  = "100" / "10";
let y  = "100" * "10";
let z = "100" - "10";
console.log(x);
console.log(y);
console.log(z);

console.log("Concatenated String: " + res);

//Boolean data type
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));    
console.log(Boolean("text"));
console.log(Boolean(0));    
console.log(Boolean([]));
//undefined and null data types
let notAssigned;
console.log(notAssigned);
let newVar;
console.log(newVar)

function sayhi(name) {
    console.log(`hi ${name}`);
}
x = sayhi('hike');
console.log(`value in x= ${x}`);


const myValue = null;
if (myValue) {
  console.log("Not null"); 
} else {
  console.log("Null"); 
}