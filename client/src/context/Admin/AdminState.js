import React, { useReducer } from "react";
import axios from "axios";

import adminContext from "./adminContext";
import adminReducer from "./adminReducer";
import {
  GET_ALL_USERS_POST,
  GET_ALL_USERS,
  GET_ONE_POST_BY_ID,
  GET_ONE_USER_BY_ID,
  DELETE_A_USERS_POST,
  UPDATE_A_USER,
  DELETE_A_USER,
  ADMIN_ERROR,
  ADMIN_LOGOUT,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  ADMIN_CHECK
} from "../types";
import setAuthToken from "../../utils/SetAuthToken";
//import User from "../../../../models/User";

const AdminState = (props) => {
  const initialState = {
    isAdmin: null,
    token: localStorage.getItem("token"),
    loading: true,
    user: null,
    error: null,
    isAuthenticated: null, 
    
  };

  const [state, dispatch] = useReducer(adminReducer, initialState);

  const loadAdminUser = async ()=>{
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      adminCheck(res.data.role)
      //console.log(res.data.role, " checking user role ")
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  }
 const adminCheck = async (role)=>{
   try {
    if (role === 'admin'){ 
      dispatch({ type:ADMIN_CHECK })
    } 
   } catch (error) {
    dispatch({ type: AUTH_ERROR})
   }
 
 
 }
  const checkForAdminUserAndLogin = async (formData ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const response = await axios.post("/api/auth", formData, config);
        console.log(response, ' response')
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: response.data }); 
        loadAdminUser()  
    } catch (error) {
      dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.response.data.msg });
    }
  };
// NEED ERROR STATE
  const logout = () => dispatch({ type: ADMIN_LOGOUT });
  return (
    <adminContext.Provider
     value={{
        isAdmin: state.isAdmin, 
        error: state.error, 
        user: state.user,
        isAuthenticated: state.isAuthenticated, 
        loading: state.loading, 
        checkForAdminUserAndLogin,
        loadAdminUser, 
        logout
    }}>
    {props.children}
    
    </adminContext.Provider>
  );
};

export default AdminState;
