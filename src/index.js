import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./Container/App";
import * as serviceWorker from "./serviceWorker";
import loginReducer from "./store/reducers/loginReducer/loginReducer";
import registrationReducer from "./store/reducers/registrationReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine reducers into one main root reducer
const rootReducer = combineReducers({
  globalLogin: loginReducer,
  globalRegistration: registrationReducer
});

const reduxStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
