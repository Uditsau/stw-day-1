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
const age=20;
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
let arr = [1,2,3,4,5,6,7];
console.log(arr);
console.log(arr[2])
console.log(typeof arr);





//object declaration
const obj={
    name: {
        first: "Udit",
        last: "Sau"
    },
    age: 22,
    city: "Kolkata"
    school: "XYZ School"
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



//
console.log(`5`!=5);
console.log(`5`!==5);
console.log(`5`!=5,obj.name.third);//undefined karon eta dutoi check korbe, first check korbe 5!=5, then obj.name.third check korbe, jeta undefined, so output hobe false
console.log(`5`!==5,obj.name.third);//undefined karon eta dutoi check korbe na, first check korbe 5!==5,r jehetu setai thik tai secong ta r check korbe na, so output hobe true





if(2>3){
    console.log("wrong  ");
}else{
    console.log(`this will print`)
    if(true){
        console.log(`will this print?`);
    }
}




if(2>3){
    console.log("wrong  ");
}else{
    console.log(`this will print`)
    const str = ``
    let confusion = 500 + `abc`;
    console.log(confusion);

    if(str||confusion){
        console.log(`will this print?`);
    }
}


if(2>3){
    console.log("wrong  ");
}else{
    console.log(`this will print`)
    const str = ``
    let confusion = 500 * `abc`;
    console.log(confusion);

    if(str||confusion){
        console.log(`will this print?`);
    }
}



const marks = {
    math: 90,
    science: 80,
    english: 70,
    practical: {
        science: 20
    }
}






let total= marks.math + marks.science + marks.english;
total += (marks.practical && marks.practical.science)||0
console.log(`Total marks: ${total}`);

console.log(true==1)
console.log(5+parseInt(`4a`));
console.log((0.1+0.2).toFixed(2));// tofixed(2) will round the number to 2 decimal places and return a string representation of the number. In this case, it will return "0.30" as a string.
const newChar=`Udit`
console.log(newChar.toLowerCase()==`udit`);