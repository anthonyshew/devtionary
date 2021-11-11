# Number

---
## Beginner

The data type `number` in Javascript is used to represent numbers such as `123` or `1.0930`.

Numbers are allowed up to 17 decimal places.

There are also a few `number constants` in Javascript that we should be aware of. (There are several other `number constants` not mentioned in the Beginner definition that you may find in <a href="/docs/javascript/data-types/boolean#in-code">the Advanced definition</a>.)

`NaN` means "not a number." At first glance, it appears that `NaN` is of the type `string` - but it is actually a `number`. `NaN` is most commonly seen when your code tries to treat a non-`number` value as if it were a `number`.

The largest number that can be represented in scientific notation is `1.8e+308`. Any number that is larger will be replaced with `Infinity`. (Luckily, that's a pretty large number. Three times more than the amount of atoms in the universe.)

The smallest number that can be represented in scientific notation is `-1.8e+308` Any number smaller will be replaced with `-Infinity`.

---

## Intermediate

`Number` is a primitive wrapper object that is used to work with numbers in Javascript.

Values of other types can be coerced into a `number` using the `Number` constructor. However, be aware that you may end up with `NaN` as your result!

---

## Advanced

In Javascript, the `number` data type is a double precision floating point value following the 64-bit binary format IEEE 754 standard.

The `Number` constructor contains many constants and methods that are useful when working with numbers in Javascript. For more information, visit <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer">MDN - Number Object</a>.

---
## Examples

### In Code

```js
// Convert a number that is written as a string into the number data type
const a = Number("123")
a === 123 // true

// By default, the radix is log base 10
const b = parseInt("123")
b === 123 // true
```

```js
// Be careful!
// These are some common gotchas when using strings and numbers together.

const value = "10" + 12;
// value becomes "1012"
// The number 12 was coerced to a string with the `+` operator to concatenate the string!

const value = "12" - 10;
// value becomes 2
// `-` is a mathematical operator. This time, the string was coerced to a number!
```
```js
// Booleans can also be typecasted to their loosely equivalent numerical sister!
const value = true - false // 1
// false == 0 (loosely equal (==) to 0, not === )
// true == 1
```
### In Conversation

> Javascript numbers are exactly what you would identify them as in real life. 1, .25, 1000, and -42 are numbers in either world, just as you would expect.

---

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
  label="MDN - Number Object"
/>

<ExternalLink
  href="https://blog.soulserv.net/javascript-nan-demystified/"
  label="NaN Demystified"
/>