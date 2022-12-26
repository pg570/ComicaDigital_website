import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from "./auth.types";

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
      return{
        ...state,
        data:{
          isAuthenticated:false,
          token:"",
        },
        error:false,
        loading:false
      } 
    }
    case AUTH_SIGN_UP_LOADING:{
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case AUTH_SIGN_UP_ERROR:{
      return {
        ...state,
        error:true,
        loading:false,
      }
    }
    case AUTH_SIGN_IN_SUCCESS:{
      localStorage.setItem("userDetails",JSON.stringify(payload))
      return{
        ...state,
        data:{
        isAuthenticated:true,
        token:payload.token
        },
        error:false,
        loading:false
      } 
    }

    case AUTH_SIGN_IN_LOADING:{
      return {
        ...state,
        error:false,
        loading:true
      }
    }

    case AUTH_SIGN_IN_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }

    case AUTH_SIGN_OUT:{
      console.log("signout")
      localStorage.removeItem("userDetails")
      return{
        ...state,
        data:{
        isAuthenticated:false,
        token:""
        }
      } 
    }
    default:{
      return state;
    }
  }
  
};
