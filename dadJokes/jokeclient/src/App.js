import './App.css';
import { useState } from 'react'; //object destructing

function App() {
  let prompt = "Enter value:";
  let normalInput = '';
  let [stateInput, setStateInput] = useState('');
  console.log(typeof stateInput, typeof setStateInput)
  useState('');
  let [buttonValue, setButtonValue] = useState(false)

  return (
    < div className="App" >
      <input placeholder={prompt + '1'} id="firstInput" onChange={(e) => { console.log(e.target.value) }} />
      <input placeholder={prompt + '2'} id="secondInput" value={stateInput} onChange={(e) => { console.log(e.target.value); setStateInput(e.target.value) }} />
      <h1>Normal: {normalInput}</h1>
      <h1>State: {stateInput}</h1>
      <button onClick={(e) => { setButtonValue(!buttonValue) }}>{buttonValue ? 'Login' : 'Sign Up'}</button>
    </div >
  );
}
//this line will export the app function to be available to other files, and app will be the default export.
export default App;
