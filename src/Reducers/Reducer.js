import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import productReducer from './productReducer';

const rootReducer = combineReducers({
product:productReducer,
auth:LoginReducer
})

export default rootReducer;