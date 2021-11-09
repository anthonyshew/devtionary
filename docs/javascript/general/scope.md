# Scope
---

## Beginner

In Javascript, scope refers to the "context" or "code block" within the file or codebase. The scope determines the availibility of the items within the scope that is being discussed.

For instance, a function has "scope" in that the variables that are declared inside the function are "in scope." A variable outside of the function would be described as "out of scope."

When a variable is available within a certain scope, it is said to be "local."

---

## Intermediate

Scope describes the accessibility of variables throughout the file that make some variables usable in some parts of the file but not others.

In Javascript, there are three types of scope:
- <a href="/docs/javascript/general/block-scope">Block Scope</a>
- <a href="/docs/javascript/general/function-scope">Function Scope</a>
- <a href="/docs/javascript/general/global-scope">Global Scope</a>

---

## Advanced

The current context of execution. The "visibility" of other variables and values are dependent on the closure of the program. Variables used out of scope with throw errors.

---

## Examples

### In Code

```
const example = () => {
  let foo = "Devtionary rocks!"

  console.log("Is foo in scope?")
  console.log(foo)
  console.log("Yes, it is!")
}

console.log (foo) // Throws an error
// This broke your code because foo is not available to you here
// foo is trapped inside of the function
```

### In Conversation

> Scope in the real world can be compared to a series of buckets. Imagine two buckets - one large, one small - and the small bucket is *inside* of the larger bucket.

> Now, imagine that there is an apple inside of the smaller bucket. The apple could be said to be "in scope" of both the smaller and larger bucket since it is inside of both buckets.

> Now, imagine that there is an orange inside of the larger bucket but outside of the smaller bucket. The orange would be "out of the scope of the smaller bucket" but "in the scope of the larger bucket."

> Now, imagine a lemon that is outside of both of the buckets sitting on the ground. The lemon would be "out of scope" of both buckets!

---

## Resources for More Info

### Links

<div><a href="https://www.w3schools.com/js/js_scope.asp" target="_blank" rel="noopener noreferrer">W3 Schools - Scope</a></div>
<div><a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope" target="_blank" rel="noopener noreferrer">MDN - Scope</a></div>
<div><a href="https://dmitripavlutin.com/javascript-scope/" target="_blank" rel="noopener noreferrer">Blog Post - Dmitri Pavlutin</a></div>