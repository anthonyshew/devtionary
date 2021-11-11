# Block Scope

---

## Beginner

A block scope is the area within `if`, `switch` conditions or `for` and `while` loops. Generally speaking, whenever you see curly brackets `{}`, it is a block of code with "block scope."

---

## Intermediate

Block scope in JavaScript is established using the `let` and `const` keywords that were introduced in ES6. Any variables declared using these keywords in a block are not accessible outside the block.

---

## Examples

### In Code

```js
if (true) {
  var a = 'Hello from A'; // This variable will get hoisted
  let b = 'Hello from B'; // This is block scoped
  const c = 'Hello from C'; // This is also block scoped
}

console.log(a); // Prints "Hello"
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://medium.com/@allansendagi/block-scope-in-javascript-8fd2f909e848"
  label="Block Scope in JavaScript by Allan Sendagi"
/>