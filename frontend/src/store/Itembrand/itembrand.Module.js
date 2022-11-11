

export const Itembrandfun = (name) => async (dispatch) => {
    console.log(name)

   
    dispatch({ type: "Item_Brand", payload: name });
  // dispatch()
  };