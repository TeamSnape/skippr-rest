import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  applyMiddleware(logger, thunkMiddleware)
);

export default store;
