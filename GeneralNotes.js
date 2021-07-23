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