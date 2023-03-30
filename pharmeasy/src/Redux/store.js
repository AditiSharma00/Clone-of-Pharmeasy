import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {prodReducer as productsReducer} from "./productsReducer/prodReducer"



const rootReducer = combineReducers({
    productsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))