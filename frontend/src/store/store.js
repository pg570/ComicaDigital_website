import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { Itembrandreducer } from "./Itembrand/Itembrandreducer"



const rootReducer = combineReducers({
        //  single:Singleitemreducer,
         brand:Itembrandreducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
