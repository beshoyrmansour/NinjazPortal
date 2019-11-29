import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import reducers from "./reducers";
import sagas from "./sagas";
const middleware = [thunk];

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

  // sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
