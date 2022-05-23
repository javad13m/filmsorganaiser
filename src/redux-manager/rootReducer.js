import { combineReducers } from "redux";
import cartReducer from "./Movies/reducer";

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;
