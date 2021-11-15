# Parameter
---

## Beginner

A paramater is a name that is listed in a function's definition in the parentheses that lets you use variables within the function.

A parameter by itself is not actually equal to a value. Rather, parameters act like a placeholder that you can use when you eventually call a function and have an actual value that you want to pass in and use within the function.

---

## Intermediate

Parameters are the list of names that are assigned to a function when you use that function and pass in arguments. The arguments that you have passed in take on the parameter names when they are being used within the function.

In JavaScript, you must be careful when you assign your arguments as Javascript will not check the types of the arguments you are passing in. In fact, Javascript will not check that the right amount of arguments were passed in either.

---

## Advanced

A parameter is a named variable that can be passed into a function and used within that function's context.

When you call JavaScript functions, at no point will the function check for the correct amount of arguments nor will it check for the correct data types for the parameters. These details must be manually checked by your code if you wish for them to throw errors.

---

## Examples

### In Code

```js
const toUpperCase = (name) => { // "name" is a parameter in this function
        const upperCase = name.toUpperCase() // Converting name to all uppercase letters
    return upperCase // return the uppercase name
}

toUpperCase("Winston Churchill") // Returns WINSTON CHURCHILL
```

### In Conversation

> To compare parameters to real life, think of a machine that converts raw materials into finished goods.
> To make the machine work correctly, you must put raw wood into it's basket so that it can process the wood. The machine executes a process and gives you back milled wood.
> However, this machine is special. If you put in raw metal or raw fiber, the machine can still output finished materials - in this case, finished metal and finished linens.
> In this example, the machine is a JavaScript function. The basket in which you put raw materials is the parameter to the function. Last, the raw materials would be like arguments. As long as you put valid raw materials (arguments) into the basket (parameter), the machine will do its work for you!

---

## Resources for More Info

### Video Explainer

import YoutubeEmbed from '../../_youtube-embed.mdx';

<YoutubeEmbed
  src='https://www.youtube.com/embed/xjAu2Y2nJ34'
/>

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://www.w3schools.com/js/js_function_parameters.asp"
  label="W3 Schools - Javascript Function Parameters"
/>