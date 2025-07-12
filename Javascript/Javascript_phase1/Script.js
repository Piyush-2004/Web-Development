// 1. Variables

// Var Let Const
var a;
var a = 12;
let a;
let a = 12;
const a = 12;

// Declaration and Initialization

var a; // Declare karna
var a = 12; // declare and initialize


// Var
var a = 12;
/*
1. window mein add hota hai
2. function scoped hota hai
3. aap firse declare kar sakte ho and error nahi aayega
*/

// Let
let boy = Piyush;
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

console.log(a);
let a = 12;

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

*/


