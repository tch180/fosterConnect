import {
  GET_POST,
  UPDATE_POST,
  ADD_POST,
  DELETE_POST,
  POST_ERROR,
} from "../types.js";
import { useReducer } from "react";


const postReducer = (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: [action.payload, ...state.post],
      };
    case DELETE_POST: 
    return { 
      ...state,
      loading: false, 
    }  
    case POST_ERROR: 
    return {
      ...state, 
      error: action.payload,
    };
    default:
      return state;
  }
};

export const usePostReducer = (state, action) => useReducer(postReducer, state, action);