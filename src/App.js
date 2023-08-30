import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import MyLogin from './MyLogin';


function App() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <p>
            Edit <code>src/App.js</code> and save to reload.
            </p> */}
            {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> */}
            <div>
            <MyLogin
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />

            </div>
        </header>
        </div>
    );
}

export default App;
