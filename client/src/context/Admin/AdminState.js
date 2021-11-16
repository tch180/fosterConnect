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
    users:[],
    
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

 const getAllUsers = async () =>{
    try {
      const res = await axios.get("/api/admin/users"); 
      dispatch({type: GET_ALL_USERS, payload: res.data}) 
    } catch (error) {
      dispatch({ type: ADMIN_ERROR,payload: error.response.msg})
    }
 }

 const getAllUsersPost = async () =>{ 
   try {
     const res = await axios.get("/api/admin/post")
     dispatch({type: GET_ALL_USERS_POST, payload: res.data})
   } catch (error) {
     dispatch({ type: ADMIN_ERROR,payload: error.response.msg})
   }
 }

 const getOneUserById = async (id) => { 
  try {
    const res = await axios.get(`/api/admin/users/${id}`)
    dispatch({ type: GET_ONE_USER_BY_ID, payload: res.data})
  } catch (error) {
    dispatch({type: ADMIN_ERROR,payload: error.response.msg})
  }
 }

 const getOnePostById = async (id) => {
   try {
     const res = await axios.get(`/api/admin/post/${id}`)
     dispatch({ type: GET_ONE_POST_BY_ID, payload: res.data})
   } catch (error) {
     dispatch({ADMIN_ERROR,payload: error.response.msg})
   }
 }

 const deleteOneUsersPost = async (id)=>{ 
   try {
     await axios.delete(`/api/admin/post/${id}`)
     dispatch({ type: DELETE_A_USERS_POST, payload: id })
   } catch (error) {
     dispatch({ ADMIN_ERROR,payload: error.response.msg})
   }
 }

 const updateUser = async(user)=>{ 
   const config = { 
     headers: { 
       'content-type': 'application/json',
     },
   };
   try {
     const res = await axios.put(`/api/admin/users/${user._id}`, user, config); 
     dispatch({ type: UPDATE_A_USER, payload: res.data})
   } catch (error) {
     dispatch({ type: ADMIN_ERROR, payload: error.response.msg})
   }
 }; 

 const deleteUser = async (id) =>{
   try {
     await axios.delete(`/api/admin/users/${id}`); 
     dispatch({ type: DELETE_A_USER, payload: id})
   } catch (error) {
     dispatch({type: ADMIN_ERROR, payload: error.response.msg})
   }
 }


  // TESTING ROUTE. 
  const checkForAdminUserAndLogin = async (formData ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const response = await axios.post("/api/auth", formData, config);
        // console.log(response, ' response')
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
        users: state.users,
        adminCheck,
        checkForAdminUserAndLogin,
        loadAdminUser, 
        logout, 
        getAllUsers, 
        getAllUsersPost, 
        getOneUserById,
        getOnePostById,
        deleteOneUsersPost,
        updateUser,
        deleteUser
    }}>
    {props.children}
    
    </adminContext.Provider>
  );
};

export default AdminState;
