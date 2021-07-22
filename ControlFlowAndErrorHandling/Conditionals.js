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
    When we use comparison operators, we typically are asking if we can move on to the next section of code. "if" something is true, so "this thing".

*/
//If Example:
let light = 'on';
if (light == 'on') {
    console.log('light is on');
};
//keyword   expression
if (true) {
    //code to run if the expression evaluates to true
    console.log('truthy test');
}
if (false) {
    console.log("falsy Test");
}

let weather = 65;
let rain = true;
if (weather < 70 && rain == true) {
    console.log('Chilly and rainy');
}

//Challenge
let batman = 'is the night';
let bruce = true;
if (batman && bruce) {
    console.log(bruce, 'Batman');
}

/*
    IF ELSE:
We can think of this as not only providing and answer if our condition evaluates to be true, but also it ends up being false.
*/
//Example:
let today = 68;
if (today < 70) {
    //string interpolation(putting a variable outcome in console.log)
    console.log(`it's ${today}, wear a jacket!`)
} else {
    console.log(`it's ${today}, No jacket needed!`)
}

/*
    ELSE IF:
This is a condition that will be checked if the above condition was not met.
*/
//Example:
let cooktime = 60;
if (cooktime === 45) {
    console.log('Let us feast!');
} else if (cooktime > 45) {
    console.log(`It's been ${cooktime}, Hope you're ready for some charcoal`)
} else if (cooktime >= 30) {
    console.log(`It has only been ${cooktime} mins. Wait another 5-15 minutes.`);
} else if (cooktime >= 20) {
    console.log(`It has only been ${cooktime} mins. Wait another 10-25 minutes.`);
} else {
    console.log(`It has only been ${cooktime}, Give it more time, quick-hands-mcgee.`);
}

//Challenge:
let age = 22;
if (age === 17) {
    console.log(`Sorry, you're ${age}. Too young to do anything`)
} else if (age <= 18) {
    console.log('You can vote!');
} else if (age <= 21) {
    console.log('You can drink!')
} else if (age <= 25) {
    console.log('You can rent a car!')
} else if (age > 25) {
    console.log("You're old, just do what you want")
}

/*
    TERNARIES:
They are if/else statements but they look weird!
*/
//Example:
let myName = 'Kali';
if (myName === 'Kali') {
    console.log(`Hi, ${myName}!`);
} else {
    console.log(`Not sure I know ${myName}.`);
}
//shortcut:
let myName = 'Kali'
myName === 'Kali' ? console.log(`Hi, ${myName}!`) : console.log(`I'm not sure I know ${myName}.`);

// If Else Ternary
let hero = 'Batman'
let villain = 'Mr. Freeze'

hero == 'Batman' && villain == 'Riddler' ? console.log('What has a head but no tail?') :
    hero == 'Batman' && villain == 'Joker' ? console.log('Why so serious?') :
        hero == 'Batman' && villain == 'Mr. Freeze' ? console.log('Ice to meet you.') :
            console.log(`${hero} is the night.`)

//Challenge:
let lampOn = true;
let dayTime = false;

lampOn == true && dayTime != true ? console.log('The lamp is on during the night') :
    lampOn != true && dayTime != true ? console.log('The lamp is off during the night') :
        lampOn == true && dayTime == true ? console.log('The lamp is on during the day.') :
            lampOn != true && dayTime == true ? console.log('The lamp is off during the day') :
                console.log('What lamp?');

/*
    SWITCH STATEMENTS:
The switch statements executes a block of code depending on different cases.
*/
//Examples:
let instructor = 'Kali';

switch (instructor) {
    case 'Jerome':
        console.log(`${instructor} is a part of the web development team.`);
        break;
    case 'Summer':
        console.log(`${instructor} is part of the web development team.`);
        break;
    case 'Josh':
        console.log(`${instructor} is part of the software development team.`);
        break;
    default:
        console.log(`Sorry I can't find what ${instructor} teaches at this time.`);
}

let staff = 'Jerome';
switch (staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is part of the web development team`)
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the software development team.`)
    default:
        console.log(`Not able to find that teacher.`)
        break;
}

let switchConditional = true;
switch (typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or boolean`)
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

//Challenge:
let grade = 65
switch (true) {
    case grade >= 89:
        console.log(`You have an A in class.`)
        break;
    case grade >= 79:
        console.log(`You have a B in class.`)
        break;
    case grade >= 66:
        console.log(`You have a C in class.`)
        break;
    case grade >= 59:
        console.log(`You have a D in class.`)
        break;
    default:
        console.log(`You have an F in class.`)
        break;
}

//Challenge:
/*
  Take this if else statement and translate it to both a ternary and a switch statement

let character = "";
if (character === 'Michael') {
    console.log('That\'s what she said!');
} else if (character === 'Dwight') {
    console.log('It\'s not weed! It\'s hemp!');
} else if (character === 'Jim') {
    console.log('Bears. Beets. Battlestar Galactica.');
} else {
    console.log('*slow camera zoom*');
}
*/
    //Ternary
let character = 'Dwight'
character === 'Michael' ? console.log(`That's what she said!`) :
    character === 'Dwight' ? console.log(`It's not weed! It's hemp!`) :
        character === 'Jim' ? console.log(`Bears, beets, Battlestar Galactica.`) :
            console.log(`*slow camera zoom*`);

    //Switch
let char = 'Jim'
switch (char) {
    case 'Michael':
        console.log(`That's what she said!`);
        break;
    case 'Dwight':
        console.log(`It's not weed! It's hemp!`);
        break;
    case 'Jim':
        console.log(`Bears, beets, Battlestar Galactica`);
        break;
    default:
        console.log(`*slow camera zoom*`);
        break;
}