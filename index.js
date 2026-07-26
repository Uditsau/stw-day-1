console.log("Hello, World!"); 
console.log(32);
console.log(`hare krishna ,
    prabhu`);
console.log(56.6>9);
console.log(`6`+`9`);
console.log(`6`-`9`);
console.log(`6`==6);//hey 
console.log(`6`===6);//strictly equal

/*hey 
no worries
*/
console.log(`this is a bla bla bla, value of 2+3: ${2+3}`);

//variable declaration
let name = "Udit";
console.log(name);
const age=21;
console.log(age);
var city="Kolkata";
console.log(city);

console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`);

let a=10;
let b=20;
console.log(`The sum of ${a} and ${b} is ${a+b}.`);

a=30;
console.log(`The sum of ${a} and ${b} is ${a+b}.`);




// to know data type of a variable
console.log(typeof name);
console.log(typeof a);

b = typeof name
console.log(typeof b)



//array declaration
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2])
console.log(typeof arr);





//object declaration
const obj={
    name: {
        first: "Udit",
        last: "Sau"
    },
    age: 21,
    city: "Kolkata"
};
console.log(obj);
console.log(typeof obj);

console.log(obj.name);
console.log(obj.boyos);//will show undefined as boyos is not a property of obj

console.log(obj.name.first)




//user input
const userinput = prompt("Enter your name:");
console.log("your name is", userinput);



//null type
const abc = null;
const xyz = undefined;
console.log(typeof abc);
console.log(typeof xyz);
console.log(abc==xyz);
console.log(abc===xyz);
