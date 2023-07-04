import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
const store=createStore(rootReducer,
      applyMiddleware(thunk))
      
export default store;