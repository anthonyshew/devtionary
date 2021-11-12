# export
---


## Beginner

Exporting in JavaScript allows you to use your code in a different file. By writing `export` as you declare your variable, you make the variable available to other files in your project.

For examples of how to write exports, see the Examples section.

---

## Intermediate

Exports create JavaScript modules for us to use in other files within the program.

We can export variables as default exports, named exports, or both. You are only allowed to export one default export from a module although you can create many named exports.

---

## Advanced

Using exports, you can create modules to use in other parts of your program or application through live binding. The value of an export may change during execution depending on the module that exports that value.

These modules are always in strict mode - whether you declare them to be or not.

---

## Examples

### In Code

```js
const string = "Hi, I'm a string" // Declaring a variable
export default string // Setting the variable to a default export

```

```js
export const number = 42 // Declaring a variable and exporting as a named export
```

### In Conversation

> Exports in Javascript are much like exports in global trade. For instance, Sweden builds cars that they then export to other countries. In this analogy, a car would be a JavaScript module.

---

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export"
  label="MDN - export"
/>