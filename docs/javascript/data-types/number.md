---
sidebar_position: 1
---

# Number

## Beginner

The data-type `number` in Javascript, is used to represent numbers such as `123` or `1.0930`. 

With up to 17 decimal places and the highest number that can be represented in scientific notation is ~`1.8e308` or (1.8 * 10) ^ 308 any number higher gets replaced with the `number constant` `Infinity`

18 with 308 zeros is insanely huge. Thats more than 3 times the amount of atoms in the entire universe. 
this number is stored on the static readonly constant of the Number Object 
```js
//static read only constant value
Number.MAX_VALUE
1.7976931348623157e+308
```

---

## Intermediate

In Javascript, the `number` data-type is a double precision floating point value. Which follows the 64-bit binary format IEEE 754 standard. 

The `Number()` primitive wrapper object can convert numbers as strings back into numbers or by using parseInt(number, radix);
```js
// converting number as a string into a number data type
const a = Number("123") 
a === 123 //evaluates true

// by default the radix is log base 10 
const b = parseInt("123") 
b === 123 //evaluates true

// if converting a hex string must use radix base 16
parseInt("0xFF", 16) === 255
parseInt("FF", 16) === 255

// or use the Number constructor function to create 
// a number from just a raw hex byte value
// which must be prefixed with 0x to indicate a hex number
Number(0xFF) === 255
```

---


## Advanced

There are numerous static properties on the Number Object.
like mentioned before the maximum value before the number overflows into the Infinity variable `Number.POSITIVE_INFINITY`. Which also applies for negative infinity.

There is also a sort of under/over flow with the smallest allowable difference between two numbers very close in value, called the `EPSILON constant`.
Which appears because of the way a floating point number is calculated under the hood as a 64 bit value.

Consider this example: 
```js
Math.abs(0.2 - 0.3 + 0.1); // yields 2.7755575615628914e-17
Math.abs(0.2 - 0.3 + 0.1) < Number.EPSILON // true
Number.EPSILON // 2.220446049250313e-16 or 2^-52
0.2 - 0.3 // yields -0.099999999999999998
// or ALMOST negative 0.1
// why can't it just be -0.1?
// because floating point...LOL
/**
* Essentially it's to represent the smallest difference between 
* being zero and only a small fraction bigger than zero
*/
```
Thus the absolute value of -0.1 plus 0.1 should logically be unsigned zero. but because the way numbers are stored in memory by default in Javascript, with all the double precision decimal places that are allocated to memory, this is the result of that.

---

If a parameter not meeting the accepted type of format is input to these functions, the output could return undesired values such as `NaN` which is both an acronym for "Not a Number" and a constant globally scoped variable which represents any number that can't be a part of a real number solution. 

```js
Number("asdf") // NaN
parseInt("asdf") // NaN

//square roots of negative numbers are imaginary numbers
Math.sqrt(-1) // NaN

typeof NaN === "number" //true 

NaN === NaN //false
```

Which is confusing to say that `NaN` is not a number because
`typeof NaN` is a "number" data type. Just not any number that can be used for a real number solution, but possibly became part of a complex number solution.

Since Javascript can only operate on "real" numbers and not "complex" numbers such as imaginary coordinates on a mandelbrot set, to render such calculations the imaginary numbers must be retrofitted into a real number solution that Javascript can deal with. 
 - as seen on coding train's video on drawing mandelbrot set with javascript <div><a href="https://www.youtube.com/watch?v=6z7GQewK-Ks">Coding Train MandelBrot Set</a></div>

---
### Type Coercion

Javascript will coerce some types to play nice with each other
just to make an operation possible at run time despite what the result should or shouldn't be.

For example in coercion 
```js
const val = "10" + 10;
//val becomes "1010"
```
Here the number was coerced to a string with the `+` operator which is used for concatenating strings together, the final type will be coerced to a string.


For the `-` operator this will typecast the string into a number. 

```js
const val = "10" - 10;
// val becomes zero
```

Even booleans will be typecasted to their number loosely equivalent sister!
```js
false - true // yields -1
// false == 0 //notice double equal is loosely equal
//and not strict equal (false === 0) which yields false
// true == 1
```

---
### In Conversation

> Numbers are a way to abstract the real concrete world into an imaginary world. Imagine, what would we do if we had to count how many apples fell from the apple tree if we only knew how to record numbers by how many fingers and toes we had? We probably couldn't concieve of data sets bigger than that. Until we knew how to abstract how many physical objects can be represented as ideas in the form of number symbols.

---

## Resources for More Info
<div><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer">MDN - Number Object</a></div>

<div><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=6z7GQewK-Ks">Youtube - Coding Train MandelBrot Set</a></div>

<div><a target="_blank" rel="noopener noreferrer" href="https://medium.com/developers-arena/type-coercion-in-javascript-c973b369b272">Medium - Type Coercion</a></div>

<div><a target="_blank" rel="noopener noreferrer" href="https://blog.soulserv.net/javascript-nan-demystified/">NaN Demystified</a></div>

