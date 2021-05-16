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

    default:
      return state;
  }
};
