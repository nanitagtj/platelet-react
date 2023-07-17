import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers,enhancer);

export default store;