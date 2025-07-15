// 1. Variables

// Var Let Const
// var a;
// var a = 12;
// let a;
// let a = 12;
// const a = 12;

// Declaration and Initialization

// var a; // Declare karna
// var a = 12; // declare and initialize


// Var
// var a = 12;
/*
1. window mein add hota hai
2. function scoped hota hai
3. aap firse declare kar sakte ho and error nahi aayega
*/

// Let
// let boy = Piyush;
/*
1. aap firse declare nhi kar sakte ho error aayega
2. Block scoped hota ha
*/


// Scope(global, block, functional)
/*
1. Global - pure code mai use hoga

2. Block - { } -> this curly braces is a block, use only in this block

3. Functional - func abc(), used only in a function
*/

// Reassignment & Redeclaration
/*
1. We can redeclare with var but can't redeclare with let because it gives an error
*/

// Temporal Dead Zone - utna area jitne mein Js ko ptato hai ki variable exist karta hai par wo aapko value nhi de sakta

// console.log(a);
// let a = 12;

// Hoisting impact per type
/*
Hoisting - ek variable ko jab js mai banate hai to wo variable do hisse mai toot jaata hai and uska declare part uppar chala jaata hai and uska initialization part neeche reh jaata hai

1. var -> Hoist -> undefined
2. let -> Hoist -> X Referrence error
3. const -> Hoist -> X Referrence error
*/

// 2. Data types - data ka type

// Types of Datatypes - Primitives and Reference
// 1. Primitives -> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
// (string, number, boolean, null, undefined, symbol, bigint)

// 2. Reference -> inko copy karne par real copy nhi milegi but aapko reference milega parent ka
// (Arrays [], objects {}, functions())

// null -> null ka mtlb hai aapne jaan boojh kar koi value nhi di
// undefined -> undefined ka mtlb ki aapne ek variable banaya aur usey value nhi di to jo value by default mili vo ha undefined

// symbol -> unique immutable value

// In reference type if we make a copy and chang in copy then it also done the changes in original

// Dynamic Typing -> js main static typing nahi hai and yaha par hai dynamic typing jiska mtlb hai aap data ko change kar sakte ho kyunki yha dynamic datatypes hai

// typeof quirks(e.g., typeof null === 'object')

// type coercion (== vs ===) -> concept jismain ek type automatically convert ho jaayega

// Truthy and Falsy value
// Falsy Values -> 0, false, "", null, undefined, NaN, document.all
// All remianing values are truthy values

/*
Operators -> Arithmetic, comparison, logical, assignment, unary, ternary
1. Arithmetic Operators:
+(Addition & Concatenation) -(Subtract) *(Multiplication) /(Division) %(Modulus) **(Exponential)

2.Comparison
= -> for assign the values
== -> It checks only the value not type (not strict comparison)
=== -> It checks both value and type (Strict)
<
>
<=
>= 
!= (not strict)
!== (strict)
!!

3.Assignment Operator
=
+=
-=
*=
/=
%=

4.Logical Operator
&& (AND)
|| (OR)
! (NOT)

5.Unary operator
+
-
!
++
--
typeof

6.Ternary Operator
?:
ex: 12>13 ? console.log("True") : console.log("False");


#typeof & instanceof
some quirks of typeof -> typeof null is an object
                         typeof array is an object
                         typeof NaN is a number


instanceof -> generally work for reference type                         
*/

/* Control Flow
1. if else else-if

if(condition){

}
else if(condition){

}
else{

}

2. switch case
switch(value){
case 1:
    break;
case 2:
    break;
case 3:
    break;
default:        
}
3. early return pattern
function getVal(val){
if (val<25) return "D";
else if (val<50) return "C";
else if (val<75) return "B";
else return "A"
}

getVal(89);

#Loops

for while do-while forin forof  foreach

#for loop
for loop -> kaha se jaana ha, kaha tak jaana ha, kaise jaana ha
for(start; end; change){}

for(i=1;i<101;i++){
console.log(i);
}

#While Loop
while loop -> kaha se jaana ha, kab rukna ha, kaise jaana ha
start
while(end){
// code
change
}

let i=1;
while(i<32){
console.log(i);
i++;
}

#do-while loop
let i=12;
do{
console.log(i);
i++;
}
while(i<2);

Examples : 
1-50 -> for
20-30 -> for
hello na aa jaaye -> while
laal color ka ped -> while
*/

/*
Practice Problem

1. Print numbers from 1 to 10 using a for loop.
for(i=0;i<11;i++){
    console.log(i);
}

2. Print numbers from 10 to 1 using a while loop.
let i=10;
while(i=1){
    console.log(i);
    i--;
}

3. Print even numbers from 1 to 20 using a for loop
for(i=1;i<21;i++){
    if(i%2 === 0){
        console.log(i);
    } 
}

4. Print odd numbers from 1 to 15 using a while loop
let i=1;
while(i<16){
    if(i%2 === 1){
        console.log(i);
    }
    i++;
}

5. Print the multiplication table of 5.
for(i=1;i<11;i++){
    console.log(i*5);
}

6. Print the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(i=1;i<101;i++){
    sum = sum +i;
    console.log(sum);
}

7. Print all numbers between 1 to 50 taht are divisible by 3.
for(i=1;i<51;i++){
    if(i%3 === 0){
        console.log(i);
    }
}

8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
let val = prompt("Give me a number");
for(i=1;i<val;i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
}   
}

9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
for(i=1;i<101;i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}

10. stop at first multiple of 7
Write a loop from 1 to 100 that:
Prints each number
Stops completely when its find the first number divisible by 7
for(i=1;i<101;i++){
    if(i%7===0){
        break;
    }
    console.log(i);
}

11. Skip Multiples of 3

Write a loop from 1 to 20 that:
Skip number divisible by 3
print all others
for(i=1;i<21;i++){
    if(i%3===0) continue;
    console.log(i);
}

10. Print first 5 Odd numbers only
let count = 0;
for(i=1;i<101;i++){
    if(i%2===1){
        count++;
        console.log(i);
    }
    if(count===5) break;
}
*/

/*
#Functions

1. Function ka name hum number,special characters aur keyword se nhi de sakte
2. Syntax:
pehla tareeka
is tareeke ko hum function statements kehte hain
function name(){
// code
}

Dusra tareeka
is tareeke ko hum function expression kehte hain
let fnc = function(){
console.log("Happy New Year");
};

fnc();

Fat Arrow Func

let fnc = ()=>{
    console.log("HeyHeyHey");
};
fnc();


Parameters and arguments
example : function add(v1,v2){
console.log(v1+v2);
};
add(1,2)

here v1 and v2 are parameters and 1 and 2 are arguments

Default, rest and spread parameters

//ab arguments kai saare ho to humein utne hi parameters banane padenge, issey bachne ke liye hum rest ka use karte ha ... agr ... function ke parameter space mein lage ho to wo rest operators ha and agr wo array and obejcts mai ho to wo spread operator hai

1. Default
function add(v1=0,v2=0){
console.log(v1+v2);
}
add(1,2)

2.Rest
function print(...val){
console.log(val);
}
print(1,2,3,4,5,6,7,8,9,10)


Returns and Early Returns

First class functions -> functions ko value ki tarah treat kar sakte ho

function abcd(val){
val();
}

abcd(function(){
console.log("hey");
});

Higher-order functions -> wo function hota ha wo return kare ek function ya fir accept kare ek function apne parameter mai

Pure Function -> aisa function jo bahar ki value ko badal de
let a = 3;
function abcd(){
console.log("Hii");
}

Impure function -> aisa function jo bahr ki value ko badal de
let a = 3;
function xyz(){
a++;
}

closures -> ek function jo return kare ek aur function aur return hone waala function humesha use karega parent function ka koi variable
function abcd(){
let a = 12;
return function(){
console.log(a);
}
}

Lexical Scoping -> jaise neeche example mai a ki lexical scoping hai 401 se 408 tak iskamtlb a ko hum jha define kar rhe ha wahse usko kis line tak use kar sakte ha wo uski lexical scoping hui

function abcd(){
let a = 12;
function efgh(){
let b = 13;
function ijkl(){
let c = 14;
}
}
}

Imediately Invoked Function Expression(IIFE)

(function(){
coonsole.log("HeyHey");
})();
*/
