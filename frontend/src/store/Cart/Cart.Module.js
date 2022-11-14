export const totalcost = (cost) => async (dispatch) => {
     console.log(cost)

   
    dispatch({ type: "Total_cost", payload: cost });
  // dispatch()
  };
