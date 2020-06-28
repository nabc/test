import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddlware from 'redux-saga';

import { history } from './history';
import watcherSagas from './sagas';
import rootReducer from '.';

const sagaMiddleware = createSagaMiddlware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  sagaMiddleware.run(watcherSagas);
  return store;
};

export default configureStore;
