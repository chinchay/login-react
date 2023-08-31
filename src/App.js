import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import MyLogin from './MyLogin';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/Login/Login';
import useToken from './components/App/useToken';


// function setToken(userToken){
//     console.log("userToken: ", userToken)
//     sessionStorage.setItem( "token", JSON.stringify(userToken) )
// }

// function getToken(){
//     const tokenString = sessionStorage.getItem("token")
//     const userToken = JSON.parse(tokenString)
//     console.log("gettoken: ", userToken, userToken?.token)
//     return userToken?.token
// }

function App() {

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")

    // const [token, setToken] = useState()
    // const token = getToken()
    const {token, setToken} = useToken()

    if (!token){
        console.log("inside token: ", token)
        return <Login setToken={ setToken } />
    }
    
    console.log("outside token: ", token)

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
