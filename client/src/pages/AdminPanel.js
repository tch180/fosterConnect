/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import AdminContext from "../context/Admin/adminContext";
import AuthContext from "../context/Auth/authContext";
import { useHistory,Link } from "react-router-dom";

function AdminPanel(props) {
  const history = useHistory();

  const adminContext = useContext(AdminContext);
  const {
    user,
    logout,
    getAllUsers,
    getAllUsersPost,
    getOneUserById,
    getOnePostById,
    deleteOneUsersPost,
    updateUser,
    deleteUser,
  } = adminContext;

  useEffect(() => {
    adminContext.loadAdminUser();
    getAllUsers();

    console.log("loading admin user");
    //eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    console.log("user is logged out");
    history.push("/");
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
          <span className="fs-4">Admin Panel</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/AdminView/ViewUsers" className="nav-link text-white ">
              View Users
            </Link>
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
            <strong>{user && user.firstName}</strong>
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
              <a className="dropdown-item" href="#!" onClick={onLogout}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
