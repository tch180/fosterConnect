import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/alert/AlertState";

import Navbar from "../src/layout/NavBar";
import Footer from "./layout/Footer";

import "./App.css";
import LandingPage from "./layout/LandingPage";
import ProfilePage from "../src/pages/Profile";
import HomeRating from "./pages/HomeRating";
import Mentors from "./pages/Mentors";
import AboutUs from "./pages/AboutUs";
import AdminPanel from "./pages/AdminPanel";
import Login from "./components/login";
import SignUp from "./components/signUp";
import  Alerts  from "./components/Alerts";
import AdminLogin from './components/AdminLogin'

import setAuthToken from "./utils/SetAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import AdminRoute from './routing/AdminRoute'

import PostState from './context/post/PostState'; 

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <AuthState>
      <AlertState>
        <PostState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="App">
              <Alerts />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute exact path="/homerating" component={HomeRating} />
                <PrivateRoute exact path="/mentors" component={Mentors} />
                <AdminRoute exact path="/Admin" component={AdminLogin} />
                <AdminRoute exact path="/AdminView" component={AdminPanel} />
                <Route exact path="/About" component={AboutUs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
        </PostState>
      </AlertState>
    </AuthState>
  );
}

export default App;
