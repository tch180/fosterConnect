import {
  GET_ALL_USERS_POST,
  GET_ALL_USERS,
  GET_ONE_POST_BY_ID,
  GET_ONE_USER_BY_ID,
  DELETE_A_USERS_POST,
  UPDATE_A_USER,
  DELETE_A_USER,
  ADMIN_ERROR,
  AUTH_ERROR,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  USER_LOADED,
  ADMIN_LOGOUT,
  ADMIN_CHECK,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case ADMIN_LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        ...action.payload,
      };
    case AUTH_ERROR:
    case ADMIN_LOGIN_FAIL:
    case ADMIN_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        isAdmin: false,
        error: action.payload,
      };
    case ADMIN_CHECK:
      return {
        ...state,
        isAdmin: true,
      };
    case ADMIN_ERROR: 
    case GET_ALL_USERS_POST: 
    return { 
      ...state, 
      post: action.payload
    }
    case GET_ALL_USERS: 
    return { 
      ...state, 
      users: action.payload
    }
    case GET_ONE_POST_BY_ID: 
    return { 
      ...state, 
      post: action.payload
    }
    case GET_ONE_USER_BY_ID: 
    return { 
      ...state, 
      user: action.payload
    }
    case UPDATE_A_USER: 
    return { 
      ...state, 
      user: action.payload, 
    }
    case DELETE_A_USER: 
    return { 
      ...state, 
      loading: false,
    }
    case DELETE_A_USERS_POST: 
    return { 
      ...state, 
      loading: false,
    }

    default:
      return state;
  }
};
