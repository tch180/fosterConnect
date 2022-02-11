import axios from "axios";


//TYPES
import {
  GET_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POST_ERROR,
} from "../types.js";


 export const initialState = {
    post: [],
    error: null,
 }


 export  const getUsersPost = async (id,dispatch) => {
    try {
      const res = await axios.get("/api/posts");
      dispatch({ type: GET_POST, payload: res.data });
    } catch (error) {
      console.log("error-------------------", error);
      dispatch({ type: POST_ERROR, payload: error.response.msg });
    }
  };
   export const addUserPost = async (post,dispatch) => {
    const config = {
      header: {
        "content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/posts", post, config);
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.msg });
    }
  };

  export const deleteUserPost = async (id,dispatch) => {
    try {
      console.log("starting delete users post");
      await axios.delete(`/api/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.msg });
    }
    getUsersPost()
  };




