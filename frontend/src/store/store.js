import { applyMiddleware, legacy_createStore ,combineReducers} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducer"
import { Itembrandreducer } from "./Itembrand/Itembrandreducer"



const rootReducer = combineReducers({
        //  single:Singleitemreducer,
         brand:Itembrandreducer,
         auth:authReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
