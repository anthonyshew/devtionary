# Block Scope

---

## Beginner

A block scope is the area within **if**, **switch** conditions or **for** and **while** loops. Generally speaking, whenever you see **{curly brackets}**, it is a block.

---

## Intermediate

Block scope in JavaScript is established using the **let** and **const** keywords that were introduced in ES6. Any variables declared using these keywords in a block are not accessible outside the block.

---

## Examples

### In Code

```javascript
if (true) {
  var a = 'Hello from A'; // this variable will get hoisted
  let b = 'Hello from B'; // this is block scoped
  const c = 'Hello from C'; // this is also block scoped
}

console.log(a); // prints "Hello"
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

## Resources for More Info

### Links

<div><a href="https://medium.com/@allansendagi/block-scope-in-javascript-8fd2f909e848" target="_blank" rel="noopener noreferrer">Block Scope in JavaScript</a> by Allan Sendagi</div>
