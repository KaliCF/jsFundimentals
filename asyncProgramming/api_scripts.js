const baseUrl = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector('form');//or document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace)

function fetchSpace(e) {
    e.preventDefault();//will stop the page from reloading when we submit our form.

    console.log('Clicked!');

    fetch(baseUrl)//Start the process of 'fetching' or getting the information from our resource.
        .then(result => {
            console.log(result);
            return result.json(); //this will json-ify or translate into a json. makes easily readable
        })
        .then(json => {
            displayRockets(json);
        })
}

function displayRockets(data) {
    console.log('Inside displayRockets:', data);

    data.forEach(rockets => {//or for(let i = 0; i < data.length; i++){}
        console.log(rockets.name);
        let listItem = document.createElement('li');//creates empty <li></li> tag
        listItem.innerText = rockets.name;
        spaceShips.appendChild(listItem);
    })
}

//* Optional Challenge
//Add a table to HTML page, and comment our the URL
//comment out about the forEach loop and make a new one.
//make a new row in the table for each rocket
//inside of each new row, add in the name and cost of each rocket
