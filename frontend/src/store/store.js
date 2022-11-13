import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
import { Itembrandreducer } from "./Itembrand/Itembrandreducer"
import {  productsreducerAC, productsreducerHeadphones, productsreducerSmartPhone, productsreducerTV, productsreducerWashingMachine, productsreducerWatches } from "./product/products.reducer"



const rootReducer = combineReducers({
        //  single:Singleitemreducer,
         brand:Itembrandreducer,
         auth:authReducer,
         productsSmartphone:productsreducerSmartPhone,
         productsTV: productsreducerTV,
         productsWashingMachine:productsreducerWashingMachine,
         productsWatches : productsreducerWatches,
         productsHeadphones:productsreducerHeadphones,
         productsAC:productsreducerAC
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
