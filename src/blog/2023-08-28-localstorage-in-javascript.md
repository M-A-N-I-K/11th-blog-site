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
image: /assets/images/pexels-markus-spiske-4439901.jpg
imageAlt: Coding Image
---
LocalStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored persists even after the user closes the browser or restarts the computer.

LocalStorage is a window object property, which makes it a global object that can interact with and manipulate the browser window. It can also be used in combination with other window properties and methods.

The localStorage mechanism is available via the Window.localStorage property. Window.localStorage is part of the Window interface in JavaScript, which represents a window containing a DOM document. The Window interface features a wide range of functions, constructors, objects, and namespaces. Window.localStorage is a read-only property that returns a reference to the local storage object used to store data that is only accessible to the origin that created it.

While you can store small amounts of data with localStorage, it’s not suitable for large amounts of data. localStorage is accessible to anyone who uses the device, so you shouldn’t use it to store sensitive information. You can use it to store user preferences like the language or theme. You can also use it to cache data if you use it frequently. localStorage can store form data that won’t be lost if the user closes the browser.