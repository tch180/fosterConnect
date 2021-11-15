import React, { Fragment, useContext  } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/alert/AlertState";
import AdminState from './context/Admin/AdminState'; 





import Navbar from "../src/layout/NavBar";
import Footer from "./layout/Footer";

import "./App.css";
import LandingPage from "./layout/LandingPage";
import ProfilePage from "../src/pages/Profile";
import HomeRating from "./pages/HomeRating";
import Mentors from "./pages/Mentors";
import AboutUs from "./pages/AboutUs";
import Admin from "./components/Admin";
import Login from "./components/login";
import SignUp from "./components/signUp";
import  Alerts  from "./components/Alerts";
import AdminLogin from './components/AdminLogin'

import setAuthToken from "./utils/SetAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import AdminPrivateRoute from './routing/AdminRoute';
import DashboardRoute from "./routing/DashboardRoute";


import PostState from './context/post/PostState'; 
import Spinner from "./layout/Spinner";
import AuthContext from '../src/context/Auth/authContext';


function App() {
  // const authContext = useContext(AuthContext);
  // const {loading} = authContext;
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
  return (
    <AuthState>
    
      <AdminState>
      <AlertState>
        <PostState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="App">
              <Alerts />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <DashboardRoute exact path="/profile" component={ProfilePage} />
                <PrivateRoute exact path="/homerating" component={HomeRating} />
                <PrivateRoute exact path="/mentors" component={Mentors} />
                <Route exact path="/Admin" component={AdminLogin} />
                <AdminPrivateRoute exact path="/AdminView" component={Admin} />
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
      </AdminState>
    </AuthState>
  );
}

export default App;
