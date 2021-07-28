/*
    ASYNCHRONOUS PROGRAMMING:
-Generally, JS is read from top to bottom, performing each line of code after another - this is known as
synchronous programming.
    -ex. line 1 is run and completed before line 2 begins, which is then run and completed before line
    3, etc.
-This can become an issue when we fetch or gather information from an outside source, from something
suchj as API. If JS does not have the ablilty to run code asynchronously, we would be forced to wait
for our line of code to finish as it tried to gather mountains of data from a database. Asynchronous
code will allow us to somewhat ignore the one line at a time run.
-Asynchronous programming allows a program to do more than one thing at a time.
-Makes it possible to run long-running actions without stopping the program to wait for a response.
*/
//Synchronous Code:
const secondSync = () => {
    console.log('Second Hello')
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

//Asynchronous Code:
const networkRequest = () => {
    setTimeout(() => {//has two parameters looking for: call back funtion then miliseconds it waits till run
        console.log('Async Code');
    }, 2000)
}
console.log('Hello World');
networkRequest();
console.log('The End');

/*
    API:
-Application Program Interface.
-An API is something that wil allow us to talk to other programs as a database or server, however the
API itself is not a data base or server. It is the code with access points to the server.
-The access to a server will come in the form of something we call ENDPOINTS. These end points direct us
to sets of data.

    REST API:
-REpresentation State Transfer.
-It creates an object of requested data from clients, and sends values back as a response.

    REST API METHODS:
CRUD
    -Create (post)
    -Read (get)
    -Update (put)
    -Delete (delete request)

!FETCH ()

The fetch method is an asynchronouse method, and is part of the browser, not JS. This method will
start the process of 'fetching' or grabbing a resource from the network, and will return a promise which
is fulfilled when the repsone is available.
-A promise is an unknown value that will eventual be filled with either value or a rejection (error).
It has 3 states it can be in:
    -Pending: initial state, neither fufilled or rejected.
    -Fufilled: meaning the operation completed successfully.
    -Rejected: meaning the operation failed.
*/