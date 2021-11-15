/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/Auth/authContext";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";






const ProfileSidebar = (props, changeView) => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;

  useEffect(() => {
    // authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  // console.log(changeView,"ChangeView ");

  function handleClick(e) {
    props.changeView(e);
    console.log("handling CLick", e);
  }


  const onLogout = () => {
    logout();
    console.log("user is logged out");
    props.push("/");
  };

  return (

    <div style={{ width: "8vw" }} id="sidebar">
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
          <li>
            <Link to="/profile/ViewPost" className="nav-link text-white" >
              View Post
            </Link>
          </li>
          <li>
            <Link to="/profile/NewPost" className="nav-link text-white" >
              New Post
            </Link>
          </li>
          <li>
            <Link to="/profile/Mentors" className="nav-link text-white">
              View Mentors
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              View Resources
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
            <strong>{user && user.firstName}</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
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
              <a className="dropdown-item" href="#!" onClick={onLogout}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default ProfileSidebar;
