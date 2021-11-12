# import
---

## Beginner

Using imports, you can bring code from a different file to use in the file where you are making the import.

This is useful for making your files easier to use since you can break up your logic into separate places instead of having one giant file.

For examples of how to correctly import write an import, see the **Examples** section.

---

## Intermediate

Imports allow you to bring code from a different module into the file you are currently using.

This is convenient for organizing your code into modules that can be used repeatedly and consistently.

Depending on the module that is being imported, you'll be able to access default exports, named exports, or a combination of the two.

---

## Advanced

Through imports, you can bring both default exports, named exports, or both into the file you are currently working with - depending on the module that you are importing.

While there are some general best practices, conventions for which type of export to use will be different between codebases and packages so you must be mindful with your imports.

Imports are in strict mode no matter whether you declare them to be so or not.

---

## Examples

### In Code

```js
import Example from '../another-file.js' // Grabbing the default export from the path

console.log(Example) // Using the imported module!
```

```js
import {theImport} from '../another-file.js' // Grabbing a named export from the path

console.log(theImport) // Using the imported module!
```

```js
import * as Everything from '../another-file.js' // Importing all exports from the path

console.log(Everything.someVariable) // Logs a named export that was imported
```

### In Conversation

> A Javascript `import` is much like an "import" in the real world when you are talking about global trade. For instance, the United States can import maple syrup from Canada where it can now use and consume that maple syrup in its own ways.

---

## Resources for More Info

### Links

import ExternalLink from '../../_external-link.mdx'

<ExternalLink
  href="https://appdividend.com/2019/01/23/javascript-import-statement-tutorial-with-example/"
  label="App Dividend - How to Import Modules in Javascript"
/>