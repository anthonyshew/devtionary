---
sidebar_position: 1
---

# Boolean
---

## Beginner

In all computer science, a `boolean` is a data type that can only be assigned either `true` or `false`.

---
## Intermediate

A primitive that can be used in a binary fashion. It's two values are: `true` and `false`.

In Javascript, all values can be evaluated as `true` or `false`. Check the <a href="/docs/javascript/data-types/boolean#in-code">"In Code" section</a> for more information on which values are "truthy" or "falsy."

---
## Advanced

The primitive values of `true` and `false`.

In Javascript, the `Boolean` object is a wrapper for a boolean value.

All values in Javascript have "truthiness" or "falsiness" and can be casted to a boolean. Through the use of the `Boolean` object, a value can be tested to be truthy or falsy and casted to the associated `true` or `false` value.

Check the <a href="/docs/javascript/data-types/boolean#in-code">"In Code" section</a> for more information on which values are "truthy" or "falsy."

---
## Examples

### In Code

```js
let myBoolean = false
var yourBoolean = true

let thisNumber = 0 // false
let thatNumber = 42 // true

let myString = "this is a string" // true
let yourString = "" // false

let foo = null // false
let bar = undefined // false
let baz = NaN // false
```

### In Conversation

> You use booleans every day throughout real life. A simple "yes" or "no" is an example of a boolean. You would probably recognize "yes" as a "truthy" value and "no" as a "falsy" value.

---
## Resources for More Info

### Links

<div><a href="https://developer.mozilla.org/en-US/docs/Glossary/Boolean" target="_blank" rel="noopener noreferrer">MDN - Boolean primitive</a></div>

<div><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noopener noreferrer">MDN - Boolean Object</a></div>
