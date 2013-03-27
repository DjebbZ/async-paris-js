Async.js
========

aka "How to avoid callback pyramid and organise async code ?"
-------------------------------------------------------------

Khalid Jebbari aka DjebbZ
@Dj3bbZ

For Paris.js #28, March 28th 2013

- - - - -

### Callback ?

> A reference to executable code, or a piece of executable code, that is passed as an argument to other code.

- - - - -

### Asynchronous callback ?

> Deferred callbacks are often used in the context of I/O operations or event handling.

_Wikipedia : [Callback_(computer_programming)](http://en.wikipedia.org/wiki/Callback_(computer_programming))_

- - - - -

### A simple callback :

``` javascript
setTimeout(function() {
    alert('Inside setTimeout');
}, 1000);
alert('Outside setTimeout');
```

Which `alert` got executed first ?

- - - - -

``` javascript
setTimeout(function() {
    alert('Inside setTimeout');
}, 1000);
alert('Outside setTimeout'); // This one of course
```

- - - - -

### The callback pyramid

If your code depends on multiple async functions, its execution is prisoner of the callback pyramid.

- - - - -

``` javascript
doSomeRequest(url, function(err, response) {

    if (err) throw(err); // Custom error management

    var coolerResponse = doStuffWith(response);

    save(coolerResponse, db, function(err, dbResponse) {

        if (err) throw(new Error('shit not saved'));

        doSomethingElse(dbResponse, function(err, results) {

            if (err) throw(new Error('Lost'));

            /* Continue till you reach right side of screen ... */
        });
    });
});

// Can't use this part of code
```
