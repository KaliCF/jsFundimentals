/*
    CLASSES:
-Classes can be defined by either expresion or declaration
-Classes are functions

-Classes act as blueprints for creating objects that share methods and properties. Using this blueprint creates
different "instances" of that class, and each object will have different values for the same properties they
hold.

-When writing class, the body of the class will be written between {}
-Can only make one constructor method in a class.

-Constructor method is special method for creating and initializing an object that was created with a class.
-Can use 'super' keyword
-Super Keyword is ised to access and call functions from a parent class.

-Introduced classed into JavaScript in ES5.
-Classes are a new way to write previous existing prototype-based inheritance.
-These classes are the closet thing in vanilla JS to OOP (Object Oriented Program)
*/

//! CLASS DECLARATION

class Automobile { //usual class naming convention is to capitalizing the class name.
    //start writing my class here:
    constructor(make, model) { //inside () put in parameters
        // set the current instance of Automobile's make property to the parameter value of make.
        this.make = make
        this.model = model // These will define a make a model property on the new instance of the object making
    }
}

// Hoisting: unlike function declarations, classes are not hoisted. A class declaration must be declared before
//accessing it.

/*
    ! CLASS EXPRESSION
-Can be named or not named.
-The name given to an unnamed class expresstion is local to the class's body.
    -The name of a nammed class can be retrieved through the class's name property
*/

//Unnamed:
let Vehicle = class {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
}
console.log(Vehicle.name);

//Named:
let Auto = class Mobile {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
}
console.log(Auto.name);

//! METHODS:
// Method Definition: OLD SYNTAX:
const automobile = {
    start: function () {
        //do stuff here
    },
    stop: function () {
        //do stuff here
    }
}

//Prototype Method: NEW SYNTAX:
const automobile = {
    start() {
        //do stuff here
    },
    stop() {
        //do stuff
    }
}

class Automobile {
    constructor(make, model) {
        this.make = make
        this.model = model
    }
    start() {
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }
    stop() {
        console.log(`This ${this.make} ${this.model}'s engine stopped.`)
    }
}

/*
    ! NEW INSTANCES:
-using the 'new' keyword, we can create a new object/instance of a class.
*/

let hondaCivic = new Automobile('Honda', 'Civic')
console.log(hondaCivic.make)

let fordEscape = new Automobile('Ford', 'Escape');
fordEscape.start()

//Each new Automobile makes a new object with the object name Automobile.

/*
    !CONSTRUCTOR METHOD:
-Helps create and initialize an object created from a class
-Works aling with 'new' keyword.

-Needs to be included to create new objects and intances of our class.
    -sets properties
    -passes values for properties
*/

class Cookie {
    //the paramteres will be placeholders for values we and to pass and store in object.
    constructor(type, icing, shape) {
        //create keys that will hold values.
        this.t = type
        this.i = icing
        this.s = shape
        //Names do not have to match.
        //left side: declaring keys for the values we will pass on
        //right side: assigning our passed values into the keys.
    }
}

let chocolateChipCookie = new Cookie('Chocolate chip', false, 'square');
console.log(chocolateChipCookie.t);
console.log(chocolateChipCookie.i);
console.log(chocolateChipCookie.s);
console.log(chocolateChipCookie);

/*
    !EXTENDS:
-a keyword used in class declation/expressions to create a new child class.

-each new class creates inherits the properties and methods from the parent class.
-can also have its own properties known as a subclass.
*/

//* PARENT
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eats their food.`)
    }
}

//* SUBCLASS (CHILD)
class Dog extends Animal {
    constructor(name, breed) {
        //super has to go first otherwise we get an error.
        super(name) //in () we will pass in all properties that the parent class needs before assigning property
        //to the child class.
        this.type = breed
    }
    play() {
        console.log(`The ${this.type}, named ${this.name}, fetches the ball.`)
    }
}

const mastiff = new Dog('Maximus', 'Mastiff')
console.log(mastiff);
mastiff.play();
mastiff.eat();

/*
!Challenge:

create class called cupcake that takes in an icing, batter, and cost with a method that will tell how much a 
certain number of cupcakes will cost. (ex. '5 chocolate cupcakes with strawberry icing that costs 5 dollars each
will cost $25. the number will be input by user.)
*/

class Cupcake {
    constructor(icing, batter, cost) {
        this.i = icing
        this.b = batter
        this.c = cost
    }

    getPrice(amount) {
        console.log(amount * this.c)
    }
}

let chocolate = new Cupcake('butter cream', 'chocolate', 3)

chocolate.getPrice(5);