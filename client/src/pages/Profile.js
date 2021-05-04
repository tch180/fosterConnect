import React from 'react'

import signUp from '../components/signUp';


function Profile() {
    return (
        <div style={{color:'teal'}}>
            
            <div style={{ width: "180px" }} id="sidebar">
      <div
        className="d-flex flex-column p-3 text-white bg-dark"
        style={{ height: "100%" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4 text-center">Profile</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link text-white ">
              View Users 
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              View Post 
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              View Mentors 
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              View Resources
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Mods 
            </a>
          </li>
        </ul>

        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="62"
              height="62"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Ban User
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>


        </div>
    )
}

export default Profile
