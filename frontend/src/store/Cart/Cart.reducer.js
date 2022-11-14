// const Item_Category = require("./ItemCategory.Module");

const data = { cost : 0 };
export function Cartreducer(state = data, { type, payload }) {
    console.log(payload)
    console.log(type)
  switch (type) {
    case "Total_cost": {
      console.log(payload)
      return { ...state, cost: payload }
    }
    default: {
      return state;
    }
  }
}
// 