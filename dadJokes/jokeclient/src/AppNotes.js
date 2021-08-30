import logo from './logo.svg'; //same as doing let logo = './logo.svg';
import './App.css'; //same as <link rel="stylesheet" href="./App.css"

function App() { //uses name casing: PascalCasing
    return ( //return statement to send back code to display on webpage.
        <div className="App">
            {/* class is a reserved keyword in JS that will create a class constructor, so in JSX we use className instead.*/}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* We will use {} in order to reference the imported image from the logo file into the image source */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
//this line will export the app function to be available to other files, and app will be the default export.
export default App;
