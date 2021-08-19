import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="Login">
            {/* <img src="" /> */}

            <div className="Header">
                <h1>DenyDesigns</h1>
                <hd>WHOLESALE LOGIN</hd>
                {/* <h1>Login</h1>
                <h1>Login</h1> */}

            </div>
            <div className="Einput">
                <h>Email</h>
                <br />
                <input type="text" placeholder="Email" className="Etext" />
            </div>
            <div className="Pinput">
                <h>Password</h>
                <br />
                <input type="text" placeholder="Email" className="Ptext" />
            </div>
            <p>Forgot Password</p>
            <div className="Btn_main">
                <Link to="/form"> <button className="btn"> LET'S GO</button> </Link>

                <br />
                <h>Not a Wholsale Partner?</h>
                <div className="btn_2">
                    <Link to="/"> <button className="btn">
                        KEEP BROWSING
                    </button></Link>

                    <Link to="/form">
                        <button className="btn">
                            APPLY HERE
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Login
