---
title: Localstorage in Javascript
description: "localStorage is a property that allows JavaScript sites and apps
  to save key-value pairs in a web browser with no expiration date. This means
  the data stored persists even after the user closes the browser or restarts
  the computer.  LocalStorage is a window object property, which makes it a
  global object that can interact with and manipulate the browser window. "
author: Manik Dingra
date: 2023-08-28T20:18:12.352Z
tags:
  - post
image: /assets/images/pexels-markus-spiske-1921326.jpg
imageAlt: Coding Image
---
Var is the oldest of the three keywords and has been around since the beginning of JavaScript. It is function-scoped, which means that a variable declared with var is only accessible within the function in which it is declared. var variables can be updated and re-declared, and they are hoisted to the top of their scope, which means that they are created before they are used.

Let was introduced in ES6 (ECMAScript 2015) and is a more modern way to declare variables. It is also function-scoped, but it does not have the hoisting behavior of var. This means that let variables are not created until they are first used. let variables can also be updated, but they cannot be re-declared.


Const was also introduced in ES6 and is used to declare constant variables. Constant variables cannot be updated or re-declared. They are also block-scoped, which means that they are only accessible within the block in which they are declared.

In general, it is recommended to use let or const instead of var. let is a good choice if you need to be able to update a variable, but you don't want it to be re-declared. const is a good choice if you know that a variable's value will never change.