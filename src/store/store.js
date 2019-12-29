import { rootReducer } from "../reducer/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reduxDevTools = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const composedEnhancers = compose(applyMiddleware(thunk), reduxDevTools);
// const composedEnhancers = compose( reduxDevTools);

export const storeInit = () => createStore(rootReducer, composedEnhancers);
