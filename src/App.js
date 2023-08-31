import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import MyLogin from './MyLogin';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="App">
        <header className="App-header">

            {/* <div>
                <MyLogin
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
            </div> */}

            <div className='wrapper'>
                <h2>Application</h2>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={ <Dashboard /> } />

                        <Route path="/preferences" element={ <Preferences/> } />
                    </Routes>
                </BrowserRouter>
            </div>

        </header>
        </div>
    );
}

export default App;
