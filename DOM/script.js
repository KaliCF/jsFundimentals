console.log('Hello from script.js!');

//! 1 getElementById
console.log(document);
console.log(document.body);

document.getElementById('testParagraph').style.color = 'purple'
let testPara = document.getElementById('testParagraph');

//! 2 querySelectorAll & innerText/innerHTML
document.querySelectorAll('sampleClass') //<sampleClass>: undefined
document.querySelectorAll('.sampleClass')//gives us an array in a "nodeList"

console.log(document.querySelectorAll('.sampleClass'))

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHTML);

// //! addEventListener()
// document.getElementById('clickThis').addEventListener('click', function (event) {
//     console.log(event.target);
//     event.target.style.backgroundColor = '#031bf3'
// })

//! addEventListener - keyup
let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(document.getElementsByTagName('p'));
    document.getElementsByTagName('p')[0].innerText = 'Something has changed!'
    if (e.target.value === '') {
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;

    }
})

//!Challenge:
//Move the button into a variable, and when you click the button it will turn blue or if blue turns red

let button = document.getElementById('clickThis');

button.addEventListener('click', ev => {
    console.log(ev.target.style.backgroundColor);
    if (ev.target.style.backgroundColor == 'blue') {
        ev.target.style.backgroundColor = 'red';
    } else {
        ev.target.style.backgroundColor = 'blue';
    }
})

// OR

let button = document.getElementById('clickThis');

button.addEventListener('click', ev => {
    if (ev.target.style.backgroundColor !== 'blue') {
        ev.target.style.backgroundColor = 'blue';
    } else {
        ev.target.style.backgroundColor = 'red';
    }
})