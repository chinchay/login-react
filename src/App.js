import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import MyLogin from './MyLogin';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/Login/Login';

function App() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [token, setToken] = useState()

    if (!token){
        return <Login setToken={ setToken } />
    }

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
                        {/* <Route path="/login" element={<Login />} /> */}

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
