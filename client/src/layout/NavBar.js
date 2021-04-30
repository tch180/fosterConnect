import React, {useState}from "react";
import logo from '../assets/Foster ConnectLOGO.png'


function NavBar() {
 

  return (
    <div  style={{backgroundColor:'black',}}>
      <nav class="nav1 justify-content-center navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:'black!important'}}>
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:'teal'}} href="/">FosterConnect<img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img> </a>
    {/* <img src={logo} style={{height:'15rem', width:'15rem'}} className="img-fluid" alt="fosterConnect Logo"/> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/homerating">Home Rating</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mentors">Mentoring</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Admin">AdminPanel</a>
        </li>
      </ul>
      <span class="navbar-text">
       Making Connections that Matter
      </span>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;
