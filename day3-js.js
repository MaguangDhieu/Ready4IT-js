// tonnage validation 

let procurementTonnage = 4200;
let meetsRequirement = procurementTonnage >= 1000;

console.log(meetsRequirement); 

let procurement = 750;
console.log(procurement >= 1000);  
console.log(procurement < 1000);

let procurementT = "1200";  
console.log(procurementT >= 1000); 


//  strict equality
let costStr = '5000';
let costNum = 5000;

console.log(costStr == costNum);   
console.log(costStr === costNum);  


console.log(5 == '5');   
console.log(5 === '5');  


//complex validation
let budget = 10000;
let cost = 8000;
let tonnage = 1500;

let isValid = (cost <= budget) && (tonnage >= 1000);
console.log(isValid);
isValid = (cost <= budget) || (tonnage >= 2000);
console.log(isValid);
isValid = !(cost > budget);
console.log(isValid);
isValid = !(tonnage < 1000);
console.log(isValid);


let dealerName = "Mo";
let costUgX = 15000;

let isTrue =
    dealerName.length >= 2 &&
    costUgX >= 10000;

console.log(isTrue); 



//data loginng
let saleDate = new Date();

let day = saleDate.getDate();
let month = saleDate.getMonth() + 1; 
let year = saleDate.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);


let hours = saleDate.getHours();
let minutes = saleDate.getMinutes();
let seconds = saleDate.getSeconds();
console.log(`Time: ${hours}:${minutes}:${seconds}`);
let fullDate = saleDate.toLocaleDateString();
console.log(`Full date: ${fullDate}`);
let fullTime = saleDate.toLocaleTimeString();
console.log(`Full time: ${fullTime}`);
let dateTime = saleDate.toLocaleString();
console.log(`Date and time: ${dateTime}`);
