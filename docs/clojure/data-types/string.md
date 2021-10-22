---
sidebar_position: 1
---

# String

[Clojure API Docs for String](https://clojuredocs.org/clojure.string)

## Beginner

A sequence of characters

## Intermediate

A primitive, Clojure strings are Java Strings

## Advanced

Clojure's string primitives are Java's String data type. Underlying functions like toLowerCase and toUpperCase can be called through Clojure's string namespace. Because of [Java interop](https://clojure.org/reference/java_interop) on the JVM, Java's string functions can be called from Clojure code on strings, resulting in the below example.

```clojure
(:require [clojure.string :as str])

(str/upper-case "Hello World")
=> "HELLO WORLD"

;; Using Java interop to call String .toUpperCase()
(.toUpperCase "Hello World")
=> "HELLO WORLD"

(str/lower-case "Hello World")
=> "hello world"

;; Using Java interop to call String .toLowerCase()
(.toLowerCase "Hello World")
=> "hello world"
```

## API

[Quick Reference](https://clojuredocs.org/quickref)

## Examples

### In Code

```clojure
(:require [clojure.string :as str])

(str/upper-case "Hello World")
=> "HELLO WORLD"

(str/lower-case "Hello World")
=> "hello world"
```

## Stack Overflow Answers

## Video Explainer
