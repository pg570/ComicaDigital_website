import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
// import { Cartreducer } from "./Cart/Cart.reducer"
import { Itembrandreducer } from "./Itembrand/Itembrandreducer"



const rootReducer = combineReducers({
        // Cart:Cartreducer,
         brand:Itembrandreducer,
         auth:authReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
