/*
    SCOPE:
What is scope?
-How a computer keeps track of all its variables in a program.
-Scope can be nested where ther is an outer scope that encloses an inner scope.

    Global:  Variables that are defined outside of a function.  Functions can have acess to variables that are 
within the global scope.  Consider global scope just like we would consider Earth in relation to Indiana.  
There are a lot of "things" that could be happening outside of our local environment that could affect our state
and a lot of "things" that wouldn't.
-In relation to JS, we could have multiple functions within one JS file.
    Local:  Variables that are defined within a function. Within Indiana, there are aspects that we can focus on
that our Global aspect doesn't consider unless we make it available.
As long as your application exist, your Global Scope exist.  Local Scope only exist when your functions are 
called and executed.
*/
//Example:
let scope = 'Earth'; //now in global scope.
let getFromGlobal = 'the moon!'

if (true) { //Everything in {} is in local scope.
    let scope = 'Indiana';
    console.log(scope, 'marks local scope'); //looks for closed local scope based on {}. JS reads top down.

    let kindaLocal = 'Noblesville';

    if (true) {
        let scope = 'Indianapolis'; //local scope inside a local scope.
        console.log(scope, 'is the capital of Indiana');
    }
    console.log(scope, 'should be closest to Indianapolis');
}
//${} will cause code to look for veriable not in local scope. will not work in reverse.
/*
    LET vs VAR:
Var and Let seem to operate the same way, but while do have a lot of the same functionality (both let us declare and
and initialize variables), they behave differently
    -VAR is scoped to the nearest function block
    -LET is scoped to the nearest enclosed block
*/