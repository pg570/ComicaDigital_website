import axios from "axios";
import {
  GET_PRODUCTS_SMARTPHONE_LOADING,
  GET_PRODUCTS_SMARTPHONE_ERROR,
  GET_PRODUCTS_SMARTPHONE_SUCCESS,
  GET_PRODUCTS_TV_LOADING,
  GET_PRODUCTS_TV_SUCCESS,
  GET_PRODUCTS_TV_ERROR,
  GET_PRODUCTS_WASHINGMACHINE_LOADING,
  GET_PRODUCTS_WASHINGMACHINE_ERROR,
  GET_PRODUCTS_WASHINGMACHINE_SUCCESS,
  GET_PRODUCTS_WATCHES_LOADING,
  GET_PRODUCTS_WATCHES_ERROR,
  GET_PRODUCTS_WATCHES_SUCCESS,
  GET_PRODUCTS_HEADPHONES_LOADING,
  GET_PRODUCTS_HEADPHONES_SUCCESS,
  GET_PRODUCTS_HEADPHONES_ERROR,
  GET_PRODUCTS_AC_LOADING,
  GET_PRODUCTS_AC_SUCCESS,
  GET_PRODUCTS_AC_ERROR,
} from "./products.types";





export const getProductsSmartPhone = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_SMARTPHONE_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/smartphone")
        dispatch({type:GET_PRODUCTS_SMARTPHONE_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_SMARTPHONE_ERROR})
    }
}


export const getProductsTV = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_TV_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/tv")
        dispatch({type:GET_PRODUCTS_TV_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_TV_ERROR})
    }
}



export const getProductsWashingMachine = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_WASHINGMACHINE_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/washing machine")
        dispatch({type:GET_PRODUCTS_WASHINGMACHINE_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_WASHINGMACHINE_ERROR})
    }
}



export const getProductsWatches = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_WATCHES_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/watches")
        dispatch({type:GET_PRODUCTS_WATCHES_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_WATCHES_ERROR})
    }
}


export const getProductsheadphones = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_HEADPHONES_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/headphones")
        dispatch({type:GET_PRODUCTS_HEADPHONES_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_HEADPHONES_ERROR})
    }
}



export const getProductsAC = ()=> async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_AC_LOADING});
    try{
        let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/ac")
        dispatch({type:GET_PRODUCTS_AC_SUCCESS,payload: res.data})
        return res.data
    }catch(e){
        dispatch({type:GET_PRODUCTS_AC_ERROR})
    }
}



