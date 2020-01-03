import {combineReducers} from "redux"
import posts from './postReducer';
import inputValues from './inputReducer';
import error from './errorReducer';

const rootReducer = combineReducers({posts, inputValues, error})

export default rootReducer;
