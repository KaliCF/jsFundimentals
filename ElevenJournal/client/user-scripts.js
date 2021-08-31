//USER SIGNUP:

const { post } = require("../server/controllers/journalcontroller");

/*
The goal of this function is to allow a new user to signup for our journal app. This function will fetch 
information from our user/create endpoint on the server (localhost:3000/user/create) and handle that information 
by chaining promises together.
*/
function userSignUp() {
    console.log(`userSignUp Functino Called`);

    let userEmail = document.getElementById("emailSignup").value
    let userPass = document.getElementById("pwdSignup").value;

    let newUserData = {
        user: {
            email: userEmail,
            password: userPass
        }
    };
    console.log(`newUserData --> ${newUserData.user.email} ${newUserData.user.password}`);

    fetch(`http://localhost:3000/user/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newUserData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let token = data.sessionToken;
            localStorage.setItem(`SessionToken`, token);
            tokenChecker();
        })
        .catch(err => {
            console.error(err)
        })
};

//USER LOGIN:
function userLogin() {
    console.log(`userLogin Function called`)

    let userEmail = document.getElementById("emailLogin").value
    let userPass = document.getElementById("pwdLogin").value;
    console.log(userEmail, userPass)

    let userData = {
        user: {
            email: userEmail,
            password: userPass
        }
    }
    console.log(userData)

    fetch(`http://localhost: 3000/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let token = data.sessionToken;
            localStorage.setItem('SessionToken', token);
            tokenChecker();
        })
        .catch(err => {
            console.error(err)
        })
}

//USER LOGOUT:
function userLogout() {
    console.log(`userLogout Function Called`)
    localStorage.setItem('sessionToken', undefined);
    console.log(`sessionToken --> ${localStorage.sessionToken}`);
    tokenChecker();
}

//TOKEN CHECKER FUNCTION:
function tokenChecker() {
    console.log(`tokenChecker Function called`);

    let display = document.getElementById('journals');
    let header = document.createElement('h5');
    let accessToken = localStorage.getItem('SessionToken');
    let alertText = "log in or sign up to get started!";

    for (let i = 0; i < display.childNodes.length; i++) {
        display.removeChild(display.firstChild);
    }

    if (accessToken === 'undefined') {
        display.appendChild(header);
        header.textContent = alertText;
        header.setAttribute('id', 'defaultLogin');
    } else {
        null
    }
}
tokenChecker();