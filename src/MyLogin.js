// 'use strict';
// const os = require('os');

import React from 'react';
// import { useState } from 'react';
import axios from "axios"

// import * as kerberos from "kerberos"

// const kerberos = require('./kerberos');


// import { KerberosClient } from 'kerberos';

// var fs = require('fs');



class MyLogin extends React.Component{

    constructor(props){
        super(props)
        this.props = props
        
        this.HandleLogin = this.HandleLogin.bind(this)

        
    
    }


    async HandleLogin(){
        // const response = await axios.post( "/login", {username, password} )
        // const response = "ho"
        // console.log("response: ")
        // console.log(response)
        // console.log("end -- response.")

        console.log(this.props.username)
        console.log(this.props.password)
        console.log("")

        // var fs = require('fs');

        // process.env.KerberosClient.

        // const kerberos = require("kerberos").kerberos

        
        

    }

    render(){
        // this.Fun()
        return(
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={this.props.username}
                    onChange={ (e) => this.props.setUsername(e.target.value) }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={ (e) => this.props.setPassword( e.target.value ) }
                />

                <button onClick={this.HandleLogin}>Login</button>

            </div>
        )

    }

}

export default MyLogin