import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { textReducer } from "../Reducers/reducers";


export default function configureStore() {
    return createStore(textReducer, applyMiddleware(thunk));
}
