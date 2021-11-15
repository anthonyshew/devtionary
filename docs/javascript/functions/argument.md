# Argument
---

## Beginner

An argument is a value that you pass into a JavaScript function when you call it. The function must be written with parameters so that it can accept your arguments and use those arguments within the function.

---

## Intermediate

In JavaScript, an argument is a value that you pass into a Javascript function call.

Javascript will not check that your arguments are of the correct length or data types so you must be careful to supply the correct arguments that the function is expecting and can use properly

---

## Advanced

Arguments in JavaScript are the array of values that you pass into a function when it is called. JavaScript will not check that you have supplied the correct amount of arguments nor will it perform a typecheck.

Within the function, the supplied arguments will be converted into an array that can be accessed using the reserved keyword `arguments`.

---

## Examples

### In Code

```js
const toUpperCase = (name) => { // Declaring a function with a parameter
        const upperCase = name.toUpperCase() // Converting name to all uppercase letters
    return upperCase // return the uppercase name
}

toUpperCase("Winston Churchill") // In this line, "Winston Churchill" is an argument
// The function will return "WINSTON CHURCHILL"
```

### In Conversation

> To compare arguments to real life, think of raw materials that you could put into a machine and receive finished goods.
> To make the machine work correctly, you must put raw wood into it's basket so that it can process the wood. The machine executes a process and gives you back milled wood.
> However, this machine is special. If you put in raw metal or raw fiber, the machine can still output finished materials - in this case, finished metal and finished linens.
> In this example, the machine is a JavaScript function. The basket in which you put raw materials is the parameter to the function. The raw materials would be like arguments. As long as you put valid raw materials (arguments) into the basket (parameter), the machine will do its work for you!

---

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"
  label="MDN - The arguments object"
/>