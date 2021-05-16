import React, { useState, useContext, useEffect, Fragment } from "react";
import AuthContext from "../context/Auth/authContext"
import AlertContext from '../context/alert/alertContext'
import logo from '../assets/Foster ConnectLOGO.png'
import AdminContext from '../context/Admin/adminContext'
import authContext from "../context/Auth/authContext";

function AdminLogin(props){
   
    const alertContext = useContext(AlertContext);
    const adminContext = useContext(AdminContext); 
    const {isAdmin,checkForAdminUserAndLogin,isAuthenticated} = adminContext; 
    const { setAlert } = alertContext;
 const { clearErrors,error} = authContext
 

    useEffect(()=>{
        if (isAuthenticated && isAdmin){
            props.history.push("/AdminView"); // need to add way to go to admin view if admin is logged in. 
        }
        if (error === 'Invalid Creds'){
            setAlert(error, 'danger');
            clearErrors();
        }
    // eslint-disable-next-line
    },[error,isAdmin,props.history])
    const [user,setUser] = useState({
        email:'',
        password:'',
    });

    const { email, password} = user; 

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    const onSubmit = (e)=>{
        e.preventDefault(); 
        if (email==="" || password === ""){
            setAlert('Please fill in all fields', 'danger');
        } else {
            checkForAdminUserAndLogin({email,password});
            console.log('admin user logged in');
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
                <h1 className="h3 mb-3 fw-normal text-light">Please sign in Admin</h1>

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

export default AdminLogin
