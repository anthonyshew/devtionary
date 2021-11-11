# Global Scope

---

## Beginner

The global scope is the outermost scope in a Javascript program.

Variables that are declared globally can be accessed from anywhere else within the program.

---

## Intermediate

In Javascript, the global scope is always defined and includes any variable within the program that has not been given scope. Depending on where the Javascript is running the global scope changes.

Depending on where Javascript is currently running, the global object can end up being different and used in varied ways.

---

## Advanced

In the browser, the global scope is the `Window` object.

In a worker, the global scope is the `WorkerGlobalScope` object.

In `Node.js`, the global scope is an object called `global`.

The global object can become useful as a place to use values in the program that will need to be available everywhere. However, this practice should be used with caution as it can quickly "pollute" the global object and make the program difficult to maintain when not using best practices.

---

## Examples

### In Code

```js
const string = 'this is a string'; // This variable is global!

const example = () => {
  const anotherString = 'yet another string!'; // Not global!
  return anotherString;
};

// In this example, string and example are both global.
// anotherString is not!
```

### In Conversation

> In the real world, `global scope` is most comparable to something that affects anyone and everything on Earth. For instance, climate change is something that occurs everywhere and, thus, can be said to be "in the global scope."

---

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://developer.mozilla.org/en-US/docs/Glossary/Global_object"
  label="MDN - Global Object"
/>

<ExternalLink
  href="https://www.freecodecamp.org/news/an-introduction-to-scope-in-javascript-cbd957022652/"
  label="Cristian Salcescu - An Introduction to Scope in Javascript"
/>