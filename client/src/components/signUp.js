import React from 'react'
import logo from '../assets/Foster ConnectLOGO.png'
const signUp = () => {
    return (
        <div className="mb-5">
           <form
                style={{
                width: '22rem',
                margin: 'auto'
            }}>
                <img className="mb-4" src={logo} alt="" width="200" height="200"/>
                <h1 className="h3 mb-3 fw-normal text-white">Please Enter information below </h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control mb-2"
                        id="floatingInput"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="floatingPassword"
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="floatingPasswordconfirm"
                        placeholder="Confirm Password"/>
                    <label htmlFor="floatingPasswordconfirm">Confirm Passoword</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="floatingFirstName"
                        placeholder="First Name"/>
                    <label htmlFor="floatingFirstName"> First Name</label>
                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="floatingLastName"
                        placeholder="Last Name"/>
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
                <div className="form-floating">
                    <input
                        type="number"
                        className="form-control mt-2"
                        id="floatingAge"
                        placeholder="age"/>
                    <label htmlFor="floatingAge">Age</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign up</button>

            </form>
        </div>
    )
}

export default signUp
