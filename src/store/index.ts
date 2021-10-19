import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducer from "../reducers";
import RootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(RootReducer);

sagaMiddleware.run(RootSaga);

export default store;
