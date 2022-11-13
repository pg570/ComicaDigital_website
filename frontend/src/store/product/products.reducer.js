import {
    GET_PRODUCTS_AC_ERROR,
    GET_PRODUCTS_AC_LOADING,
    GET_PRODUCTS_AC_SUCCESS,
    GET_PRODUCTS_HEADPHONES_ERROR,
    GET_PRODUCTS_HEADPHONES_LOADING,
  GET_PRODUCTS_HEADPHONES_SUCCESS,
  GET_PRODUCTS_SMARTPHONE_ERROR,
  GET_PRODUCTS_SMARTPHONE_LOADING,
  GET_PRODUCTS_SMARTPHONE_SUCCESS,
  GET_PRODUCTS_TV_ERROR,
  GET_PRODUCTS_TV_LOADING,
  GET_PRODUCTS_TV_SUCCESS,
  GET_PRODUCTS_WASHINGMACHINE_ERROR,
  GET_PRODUCTS_WASHINGMACHINE_LOADING,
  GET_PRODUCTS_WASHINGMACHINE_SUCCESS,
  GET_PRODUCTS_WATCHES_ERROR,
  GET_PRODUCTS_WATCHES_LOADING,
  GET_PRODUCTS_WATCHES_SUCCESS,
} from "./products.types";

let initState = {
  loading: false,
  error: false,
  data: [],
};

export const productsreducerSmartPhone = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_SMARTPHONE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_SMARTPHONE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PRODUCTS_SMARTPHONE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    default: {
      return state;
    }
  }
};


export const productsreducerTV = (state = initState, { type, payload }) => {
    switch (type) {

      case GET_PRODUCTS_TV_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_TV_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_TV_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };


  export const productsreducerWashingMachine = (state = initState, { type, payload }) => {
    switch (type) {

      case GET_PRODUCTS_WASHINGMACHINE_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_WASHINGMACHINE_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_WASHINGMACHINE_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };


  export const productsreducerWatches = (state = initState, { type, payload }) => {
    switch (type) {

      case GET_PRODUCTS_WATCHES_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_WATCHES_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_WATCHES_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };


  export const productsreducerHeadphones = (state = initState, { type, payload }) => {
    switch (type) {

      case GET_PRODUCTS_HEADPHONES_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_HEADPHONES_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_HEADPHONES_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };



  export const productsreducerAC = (state = initState, { type, payload }) => {
    switch (type) {

      case GET_PRODUCTS_AC_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case GET_PRODUCTS_AC_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_PRODUCTS_AC_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      default: {
        return state;
      }
    }
  };

