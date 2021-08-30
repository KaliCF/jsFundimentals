//!Expressions and Operators.
/*
    ASSIGNMENT OPERATORS
-The equal sign (=) is standard assignment operator.
-Additions assignment is plus (+) adds variables together.
-Subtraction assignment is a minus (-), subtracts variables.
-Multiplication assignment is astric (*). Multiplies variables.
-Division assignment is the backslash (/). Divides variables.
-Exponential assignment is two astrics (**). Example 2 to the 2nd power.
-Remainder (modulus) assignment is the percent (%). Tells you whats left after division.
*/
/*
    COMPARISON OPERATORS
-Equal (==) is testing if variables are equal.
-Strict equal (===) this overrides JS coercion.
-Not Equal (!=)
-Strict not equal (!==)
-Greater than (>)
-Less than (<)
-Greater than or equal (>=) not to be confused with FAT ARROW (<=) function.
-Lesser than or equal (<=)
-And (&&)
-Or (||)
*JS is helpful and does something known as coercion when comparing values. Coercion is the process of converting
*a value from one type to another. In the below example, JS assumed that the were trying to check if '3' is equal
*to 3, even though one of our values is a string and one is an integer.
*/
//!Grammer-Types
/*
DECLARATIONS:
What is a variable?
    Variables are named containers for sorting data.
    We can think of these as resources we can call upon later. Each variable allows
    us to store data, which could be a value or a function, that we will want to reference back to.
*/
/*
    KEYWORDS
    var, let, const
    -var: the 'old' keyword for variables. We will not use this much but it is till used depending on the project and when it was made.
    -let: the 'new' word for variable. Was introduced in ES6 *newest version of ECMAscript, which is standardized of JS.
    -const: also 'new' and declared an unchangable, or constant, variable.
*/
/*
TYPES:
    BOOLEAN:
A boolean has two possible values: true and false
    NULL:
A null value is an empty value. Think of it as an empty container that has space to fill. NOTE: null and
undefined are two different things.
    UNDEFINED:
No value has been assigned and doesn't even act as an empty container.
    NUMBERS:
Literally just numbers. More than 16 numbers you may run into JS rounding up, also not great with decimals.
    STRINGS:
Strings represent text are wrapped in either single or double quotes. Can use double or single quote inside quote.
    OBJECTS:
Objects are used to store many values instead of just one.
consider them as a collection of different variables in the container
denoted by curly brackets {}
    ARRAYS
Containers that hold a list of items denoted by square brackets []
all items are within the square brackets.
Regardless of the data type, all items are seperated by commas.
    ADDITION vs CONCATENATION
JS sees the + symbol in two different ways
-when we use it with numbers, it will use the built-in math functionality
-when using strings, it will ignore the math functionality and concats, or combines, the two strings into one.
    STRING PROPERTIES:
Properties are qualities associated with data type. Strings have properties, or qualities, associated with them
the length of a string is a property.
    STRING METHODS:
methods are tools that can help us manipulate data
.property .method()
no parens   parans
*/
//! Control Flow and Conditionals.
/*
    CONDITIONALS
FALSE VALUES:
    A value that is considered false when encountered in a boolean context. There are 6 false values.
    -false
    -0
    -'', "", ``
    -null
    -undefined
    -NaN (not a number)
What does this mean? Whenever JS is expecting a value and is given one of these 6, it is evaluated as false.
Side note: there are also Truthy values in JS, which tend to be much less limited. Examples include: true, {}, [], 42, "false".

IF STATEMENTS:
    When we use comparison operators, we typically are asking if we can move on to the next section of code. "if" something is
true, so "this thing".
*/
/*
    IF ELSE:
We can think of this as not only providing and answer if our condition evaluates to be true, but also it ends up being false.
*/
/*
    ELSE IF:
This is a condition that will be checked if the above condition was not met.
*/
/*
    TERNARIES:
They are if/else statements but they look weird!
*/
/*
    SWITCH STATEMENTS:
The switch statements executes a block of code depending on different cases.
*/
/*
    LOOPS:
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to
note that it is possible for us to write code without declaring an endpoint.
Loops help us repeat a process without writing alot of code.
NOTE: press ctrl + c while clicked in the output window, it will stop the  code from running.
*/

/*
    STRUCTURE:
We have to set up our loops in a way we can:
1) See where we are in a loop
2) Consider what sort of condition we want to run it against
3) Know when we are done with that condition and move on to the next iteration.

We need to:
1) Creat an Index
2) Run a condition
3) Change to the indexing variable (execution of conditions)
*/
/*
We start our loop with a "for". Within this function, we are injecting some parameters that JS will run against. Index; condition, change index ->
result.
Within parameter, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less or equal to the number
10, take that set number and add 1 to it. Once that is processed, return that value (in this case 'console.log of that number). Once our condition
is met, we return a FALSE which ends our loop.
NOTE (syntax):
for(<create an index variable>; <run condition>; <change index>){
    <return results>
    <cont. until the condition is met>
}
If we don't know what our condition is, the loop will not have a finish line and thus run until we have to force it closed. No condition means that JS
doesn't know when to stop and will never assume that information.
    Example:
for(let i = 0; i ++){
    console.log(i);
}
*/
/*
    FOR IN LOOPS:
With for loops, we are seeking an index value and sunning it against a condition. For in loops do not require
an index number
*/
//!Functions
/*
    FUNCTIONS:
Functions are processes that we call upon to run an action. They can do the following:
-Take in an input to process, modify, or respond to (not required tho)
-Return a value (not required)
-Can be invoked (or called) as often as needed.
(A variable that does something.)
*/
//When we console.log a function jS will first evaluted the function meaning will read all the code and look
//for a value from it. If we do not have a return statement from with in tht function we will get back undefined
//*avoid calling in a function in the same function because recursion happens(can melt comp)

/*
    FUNTIONS DECLARATION:
A chunk of code that performs a set chunk of code when it is invoked (called)
*calling a function is the same as invoking function.
*/
/*
    FUNCTION EXPRESSIONS:
Assigning a function to a variable is what we call an expression.
*/
/*
    ANONYMOUS FUNCTIONS:
Anonymous functions are stored in memory but the runtime does not automatically create a reference to it.
Main use would be to pass these functions through another function. maybe have a ternaty where if something
is true we run one function, else we run a different function.
*/
/*
    PARAMETERS:
We will be using functions to pass in information and return a result. Parameters will allow our function
to take in outside information.
*/
/*
    ARROW FUNCTIONS:
Arrow functions are expressional functions that can be simplified into one of two forms: concise body and
block body. The main goal is to generate shorter syntax for writing a function.
*/
// CONCISE vs BLOCK BODY
/*
When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise,
simplified way. When we use a concise boy arrow function, the "return" statement is implied.
*/
/*
    BLOCK BODY FUNCTION:
*if you return you can keep info returned.
*/
//* Using a block body arrow, pass the same variables but increase the number of shots until the second
//* console.log is printed.
//1- block body arrow function (?)
//2- pass in 2 variables []
//3- run conditional []
//4- repeat the code until the result changes?
//!Objects and Arrays:
//*Arrays
/*
-populating and referring
-methods
-length
-iterating
*/
/*
When calling an array, we can append, or add, [] onto the end of an array name with index number of the
value we want to reference. This is known as SQUARE BRACKET NOTATION.

JS starts counting at 0, so when we console.log(list[1]) we should see 'banana'.
*/
/*
    ARRAY METHODS:
We can call on multiple different array methods that will allow us to manipulate arrays as we need to.
*/
/*
    ITERATING:
forEach-
-forEach() method executes a provided function once for each element in the array.
-the forEach() method does the same thing as a for loop or a for of loop -->both iterate over the
properties in an array.
-provide a callback function that has up to 3 arguments:
    1. the value
    2. the index
    3. the array object itself
*/
/*
    OBJECTS:
-Objects are used to store multiple sets of data in the key/value pair  format
-Denoted by {}
*/
/*
    JSON OBJECT:
-JSON stands for JavaScript Objecy Notation.
-The JSON syntax is derived from JavaScript Object syntax, but the JSON format is text only.
(turns arrays into strings)
-JSON exists as a string- useful when fetching data from a server. It needs to be translated into a native
JavaScript object if we want to access the data.
*/
/*
    OBJECT BRACKET NOTATION:
-Object bracket notation can allow us to find a value in an object we wouldn't be able to access using
dot notation.
-We can also use object bracket notation to store a key in a variable and use that variable to access
information in an object.
-This works because all key names in an object are strings.
*/
//!DOM:
/*
    DOM:
Stands for Document Object Model, and is what allows our JS to interact with HTML & CSS of our page.
The DOM specifies how browsers should create a model of an HTML page and how JS can access and update
the contents of a web page while it is in the browser's window.

DOM is an object representation of a web page, which can be modified with a scripting language like
JavaScript.

There are 2 primary things that a DOM will do:
1. Making a model of an HTML page
    -when the browser loads a webpage, it creates a model of the page in memory.
    -the DOM specifies the way in which the browser should structure the model in what is called the
    DOM tree. The DOM is called an object model becasue the DOM tree is made of objects.
2. Accessing and changing the HTML page.
    -the DOM also provided methods and properties to access and update each object in the model, which
    in turn updates what the user sees in the browswer.

Usually when working with DOM tree, we will access an element we want to work with  and then we will
modify or manipulate it.

ACCESSING:
    Common Methods for Access a Single Element:
-getElementById()
-querySelector()

    Common Methods for Accessing Mulitple Elements:
-querySelectorAll()
-getElementByClassName()
-getElementByTagName()

MANIPULATING:
    Commone Methods for Working With HTML Content:
-innerHTML
-textContent
-createElement

    Common Methods for Working with Tag Attributes:
-className / id
-setAttribute()
-getAttribute()
*/
/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT:
-innerText will simply reference or allow us to change the text of a specified element. Will return
visible text in a 'Node"
-textContent does the same thing that innerText does, but will return the FULL text of a 'Node'
-innerHTML allows us to set text as well as HTML elements, which all be nested inside of the current
HTML element we are referencing.
*/
//!AsyncProgramming:
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
/*
    NAME CASING:
- camelCasing
- snake_casing
- PascalCasing
- kebob-case
- UPPER_CASE_SNAKE_CASING
*/