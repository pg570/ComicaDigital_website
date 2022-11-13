// const Item_Category = require("./ItemCategory.Module");

const data = { Brand: [] };
export function Itembrandreducer(state = data, { type, payload }) {
  //   console.log(payload)
  switch (type) {
    case "Item_Brand": {
      console.log(payload);
      return { ...state, Brand: [...state.Brand, payload] };
    }
    case "Brand_remove":{
      return {...state,Brand:[...state.Brand].filter((brand)=>brand!==payload)}
    }
    default: {
      return state;
    }
  }
}
