import React from 'react'
import logo from '../assets/Foster ConnectLOGO.png'

const login = () => {
    return (
        <div>
            <form
                style={{
                width: '22rem',
                margin: 'auto'
            }}>
                <img class="mb-4" src={logo} alt="" width="94" height="94"/>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input
                        type="email"
                        class="form-control mb-2"
                        id="floatingInput"
                        placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control mt-2"
                        id="floatingPassword"
                        placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign in</button>

            </form>
        </div>
    )
}

export default login
