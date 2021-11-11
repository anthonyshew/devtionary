# Function Scope

---

## Beginner

Function scope refers to the context that exists within a function.<br/>

Any variables declared inside a function are only accessible within that function.

---

## Examples

### In Code

```js
function printExample() {
  const example = 'Inside the function';
  console.log(example);
}

printExample(); // outputs "Inside the function";
console.log(example); // ReferenceError
```