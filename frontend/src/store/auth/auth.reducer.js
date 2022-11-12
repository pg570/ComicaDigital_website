import { AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case AUTH_SIGN_UP_SUCCESS:{
      // localStorage.setItem("token",payload.token)
      console.log(payload)
      return{
        ...state,
        data:{
          isAuthenticated:true,
          token:payload.token
        }
      } 
    }
    case AUTH_SIGN_UP_LOADING:{
      return {
        ...state,
        loading:true
      }
    }
    case AUTH_SIGN_UP_ERROR:{
      return {
        ...state,
        error:true
      }
    }
    case AUTH_SIGN_IN_SUCCESS:{
      localStorage.setItem("token",payload.token)
      return{
        ...state,
        isAuthenticated:true,
        token:payload.token
      } 
    }
    case AUTH_SIGN_OUT:{
      localStorage.removeItem("token")
      return{
        ...state,
        isAuthenticated:false,
        token:""
      } 
    }
    default:{
      return state;
    }
  }
  
};
