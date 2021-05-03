import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from '../src/layout/NavBar'
import Footer from "./layout/Footer";


import './App.css';
import LandingPage from "./layout/LandingPage";
import ProfilePage from '../src/pages/Profile';
import HomeRating from "./pages/HomeRating";
import Mentors from "./pages/Mentors";
import AboutUs from "./pages/AboutUs";
import AdminPanel from "./pages/AdminPanel";
import  Login  from "./components/login";
import SignUp from "./components/signUp";


function App() {

  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path='/profile' component={ProfilePage}/>
          <Route exact path='/homerating' component={HomeRating}/>
          <Route exact path='/mentors' component={Mentors}/>
          <Route exact path='/About' component={AboutUs}/>
          <Route exact path='/Admin' component={AdminPanel}/> 
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>



        </Switch>
      </div>
      <Footer/>
      </Fragment>
    </Router>


    
  );
}

export default App;
