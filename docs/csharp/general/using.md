# using

---

## Beginner

The `using` keyword functions as either a statement or directive.

As a statement, the `using` keyword defines the scope of an object.

As a directive, the `using` keyword imports types from a [namespace](/docs/csharp/general/namespaces).

---

## Intermediate

### `using` as a statement

When the the `using` keyword is part of a variable declaration statement, it ensures that the variable is disposed at the end of the defined scope.

### `using` as a directive

As a directive the `using` keyword imports types from a single namespace. Types imported with a `using` directive may be referenced without fully qualifying the identifier.

### `using` as an alias directive

The `using` keyword can also create an alias for a namespace. The alias is convenient when naming conflicts exist between types in different namespaces. Use the alias to qualify the identifier.

---

## Advanced

The `using` directive has two modifiers.

Recently (introduced in C# 10), you can apply the `global` modifier to a `using` directive, which instructs the compiler to inject the modified `using` directive at the beginning of every source file.

The `static` modifier applied to a `using` directive imports a static types members and nested types.

The `static` and `global` modifiers can be used together.

---

## Examples

### In Code

*MyClass.cs*
> `using` as a statement

```

// Prior to C# 8.0
namespace {
    public MyClass {
        public void MyMethod() {
            using(var stringReader = new StringReader("some text"))
            {

            } // stringReader will be disposed when exiting this scope
        }
    }
}

// Current
namespace {
    public MyClass {
        public void MyMethod() {
            using var stringReader = new StringReader("some text"));
            // the compiler will determine the correct scope without curly braces
        }
    }
}

```

*Program.cs*

> `using` as a directive

```

// Without a using directive
class Program {
    static void Main()
    {
       var stringReader = new System.IO.StringReader();
    }
}

// With a using directive
using System.IO;

class Program {
    static void Main()
    {
       var stringReader = new System.IO.StringReader();
    }
}
```

*AliasExample.cs*

> `using` as an alias directive

```
using System.IO;
using MyCustomReaders = Company.CustomReaders.IO;

class Program {
    static void Main() {
        // StringReader exists in both System.IO and Company.CustomReaders.IO
        var reader = new StringReader("some text");
        var customReader = new MyCustomReaders.StringReader("some more text"); // using the namespace alias for our custom reader
    }
}

```

*ModiferExamples.cs*

> `using` with modifiers

```

global using System.IO; // The types in the System.IO namespace will be included in all source files
static using System.Console; // The static type Console members and any nested types will be imported

class Program {
    static void Main() {
        WriteLine("Hello world!"); // Notice we did not use the Console static type qualifier
    }
}

```

*CombinedModifierExample.cs*

> `using` with combined modifiers

```
global using static System.Console;

class Program {
    static void Main(){
        WriteLine("Hello World!");
    }
}


// Separate MyClass.cs

public class MyClass {
    public void TestMethod() {
        WriteLine("Hello Test Method!"); // The static type System.Console was included automatically because of the global using statement
    }
}
```

---

### In Conversation

> You might imagine the `using` statement as a note written to a friend that you will return something you borrowed, after a week.

> The week is your scope, the borrowed item is your variable, and the note is the using statement telling the compiler (your friend) you will be return the item.

> The `using` statement as a directive goes along with our [namespace](/docs/csharp/general/namespaces) example using toolboxes.

> In this scenario, the `using` statement references the label on the toolbox.

---

## Resources for More Info

### Links

<div><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using" target="_blank" rel="noopener noreferrer">C# Documentation - using</a></div>
