/*
    ASYNC/AWAIT:
-Allows us to program in a synchonous manner while still allowing code to run in the background.
-Helps keep our sites responsive.
*/

//* Async Function (syntax)
//-allows us to make a normal asynchronous: which mean we can use await.
//-must use the async keyword at the beginning of the function declaration.

async function myFn() {
    await console.log('testing');
}

const myAsyncFn = async () => {
    await console.log('testing');
}

const newFn = () => {
    await console.log('testing'); //error: await is only valid in an async function
}

async function fn() {
    return 'hello';
}
fn().then(console.log)//gives us a promise of hello return then will console.log the value.

// AWAIT:
// pauses an async function until a promise is settled (either resolved or rejected)

fetch('https://random.dog/woof.json');
    .then(result => result.json());
    .then(json => console.log(json));
    .catch (error => console.log(error));

//USING ASYNC:
async function getWoof() {
    const repsonse = await fetch('https://random.dog/woof.json');
    const json = await Response.json;
    return json;
}
console.log(getWoof()); //undefined: the function runs but no value until console.log has already print

getWoof().then(console.log);