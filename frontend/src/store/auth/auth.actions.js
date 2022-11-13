// Auth Actions here
import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_UP_LOADING,
  AUTH_SIGN_UP_SUCCESS,
} from "./auth.types";

export const signUpAPI = (userData) => async (dispatch) => {
  // console.log(userData)
  dispatch({
    type: AUTH_SIGN_UP_LOADING
  });
  try {
    const response = await axios.post("https://comicadigitalbackend.up.railway.app/api/users/signUp", {...userData,role:"user"});
    console.log(response)
    dispatch({
      type: AUTH_SIGN_UP_SUCCESS,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    dispatch({
      type: AUTH_SIGN_UP_ERROR
    });
  }
};

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({
    type: AUTH_SIGN_IN_LOADING,
  });
  try {
    const response = await axios.post("https://comicadigitalbackend.up.railway.app/api/users/login", creds);
    // console.log(response.data)
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    dispatch({
      type: AUTH_SIGN_IN_ERROR,
    });
    // console.log(e.message)
  }
};

export const logout = () => ({
  type: AUTH_SIGN_OUT,
});
