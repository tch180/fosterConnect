import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../context/Auth/authContext"
import logo from '../assets/Foster ConnectLOGO.png'

function Login(props){
    const authContext = useContext(AuthContext); 

    const { login, error, clearErrors, isAuthenticated} = authContext

    useEffect(()=>{
        if (isAuthenticated){
            props.history.push("/profile");
        }
        if (error === 'Invalid Creds'){
            alert('Incorrect please try again')
            clearErrors();
        }
    },[error,isAuthenticated,props.history, clearErrors])

    const [user,setUser] = useState({
        email:'',
        password:'',
    });

    const { email, password} = user; 

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault(); 
        if (email==="" || password === ""){
            alert(" please enter email and password ")
        } else {
            login({email,password});
            console.log('user logged in');
        }
    }




    return (
        <div>
            <form onSubmit={onSubmit}
                style={{
                width: '22rem',
                margin: 'auto'
            }}
            >
                <img className="mb-4" src={logo} alt="" width="94" height="94"/>
                <h1 className="h3 mb-3 fw-normal text-light">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control mb-2"
                        id="floatingInput"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="floatingPassword"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign in</button>

            </form>
        </div>
    )
}

export default Login
