import  rootReducer  from '../reducer';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

const reduxDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;
const composedEnhancers = compose(applyMiddleware(thunk), reduxDevTools);

export const storeInit = () => createStore(rootReducer, composedEnhancers);

export default storeInit;
