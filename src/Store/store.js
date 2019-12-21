import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { textReducer } from "../Reducers/reducers";

const reduxDevTools = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const composedEnhancers = compose(applyMiddleware(thunk), reduxDevTools);


export default function configureStore() {
    return createStore(textReducer, composedEnhancers);
}
