// console.log("Hello World!");
// console.log("This is first JavaScript file by Piyush");

// // Template Literals

// let pencilPrice = 10;
// let erasorPrice = 5;
// let output = `The total price is ${pencilPrice + erasorPrice} rupees.`
// console.log(output);

// // Arithmetic Operators

// let a = 5;
// let b= 10;

// console.log(a-b);
// console.log(a*b);
// console.log(a+b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// // Unary
// console.log(a++);
// console.log(++a);

// // Conditional Statement

// console.log("before my if statement");
// let age = 23;
// if(age = 18){
//     console.log("You can vote");
// }
// console.log("after my if statement");

// Problem : Create a system to calculate popcorn prices based on the size customer asked for

// let size = "XL";

// if(size === "XL") {
//     console.log("Price is Rs.250");
// } 
// else if(size === "L"){
//     console.log("Price is Rs. 200");
// }
// else if(size === "M"){
//     console.log("Price is Rs.100");
// }
// else{
//     console.log("Price is Rs.50");
// }

// Nested if-else

// let marks = 90;

// if(marks >= 33){
//     if(marks >= 80){
//         console.log("O");
//     }
//     else{
//         console.log("A");
//     }
// }
// else{
//     console.log("Better luck next time!");
// }

// let day = 2;
//  switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         case 7:
//         console.log("Sunday");
//         break;
//         default:
//             console.log("Your code is not correct.");
//  }

//  alert & prompt

// alert("Something is wrong");

// prompt("enter your name :");

// let num = 25;
// if(num%10 === 0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

// let fullName = prompt("enter your name");
// let age = prompt("enter your age");
// alert(`${fullName} is ${age} years old`);
// console.log(alert);

// let quarter = 5;
// switch(quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//         case 2:
//             console.log("April, May, June");
//             break;    
//             case 3:
//                 console.log("July, August, September");
//                 break;
//                 case 4:
//                     console.log("October, November, December");
//                     break;
//                     default:
//                         console.log("All quarters are cover.");
// }

// let str = "Avinash"
// if((str[0] == a|| str[0] == A) && (str.length > 5)){
//     console.log("Str is Golden string");
// }
// else{
//     console.log("Str is not a golden string");
// }


// Array

// let students = ["piyush","avinash","roshan"];

// function abc(){
//     console.log(abc.xyz);
// }

// abc()
// abc.xyz=400
// abc.xyz=200
// abc()

// const numbers = [1,2,3,4];
// numbers[100] = 500
// console.log(numbers);

// console.log(typeof typeof 100);

// const arr = [...'Piyush']
// console.log(arr);

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));

let fullName = "Piyush roy";
let age = 20;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}.`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled : ${isStudent}`;
