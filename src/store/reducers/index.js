import { combineReducers } from "redux";
import reducerUser from "./user.reducer";

const reducers = combineReducers({ user: reducerUser });

export default reducers;
