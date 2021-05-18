import {
  GET_POST,
  UPDATE_POST,
  ADD_POST,
  DELETE_POST,
  POST_ERROR,
} from "../types.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
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
