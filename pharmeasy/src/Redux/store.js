import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  // cart:cartReducer
});
export const store = createStore(rootReducer);
