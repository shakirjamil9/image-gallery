import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "../reducers/mainReducer";

// rootSaga import
import rootSaga from "../saga/index";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    mainReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
