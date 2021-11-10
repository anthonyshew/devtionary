# Function Scope

---

## Beginner

Function scope refers to the context that exists within a function.<br/>
Any variables declared inside a function are only accessible therein.

---

## Intermediate

The **var** keyword defines variables for function scope availability. Variables declared using this keyword get _hoisted_ to the top of the function scope, as opposed to those defined using **let** and **const**

---

## Examples

### In Code

```js
function printExample() {
  var example = 'Inside the function';
  console.log(example);
}

printExample(); // outputs "Inside the function";
console.log(example); // ReferenceError
```

## Resources for More Info

### Links

<div><a href="https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript" target="_blank" rel="noopener noreferrer">Understanding Variables, Scopes and Hoisting in JavaScript</a></div>
