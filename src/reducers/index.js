import {   combineReducers } from "redux";
import { counterReducer } from "./counter";
import { loginReducer  } from "./login";
 
const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
});

export default allReducers;