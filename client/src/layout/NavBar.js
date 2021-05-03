import React, {useState} from "react";
import logo from '../assets/Foster ConnectLOGO.png'

function NavBar() {

  return (
    <div style={{
      backgroundColor: 'black'
    }}>
      <nav
        className="nav1 justify-content-center navbar-expand-lg navbar-dark bg-dark"
        style={{
        backgroundColor: 'black!important'
      }}>
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{
            color: 'teal'
          }}
            href="/">FosterConnect<img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"></img>
          </a>
          {/* <img src={logo} style={{height:'15rem', width:'15rem'}} className="img-fluid" alt="fosterConnect Logo"/> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/homerating">Home Rating</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mentors">Mentoring</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Admin">AdminPanel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Signup</a>
              </li>
            </ul>
            <span className="navbar-text">
              Making Connections that Matter
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
