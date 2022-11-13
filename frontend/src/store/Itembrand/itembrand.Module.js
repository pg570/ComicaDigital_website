



export const Itembrandfun = (name) => async (dispatch) => {
    console.log(name)

   
    dispatch({ type: "Item_Brand", payload: name });
  // dispatch()
  };

  export const Itembrandfundel=(name)=>async(dispatch)=>{

    dispatch({type:"Brand_remove",payload:name})
  }