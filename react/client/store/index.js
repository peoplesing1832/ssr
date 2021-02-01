import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'client/store/reducers';
import { isClient } from '@/util/env';

const {
  homeReducer,
  moreReducer,
} = reducers;

const reducer = combineReducers({
  home: homeReducer,
  more: moreReducer,
});

const store = () => {
  const initState = isClient() ? window.__INITIAL_STATE__ : {};
  return createStore(reducer, initState, applyMiddleware(thunk));
};

export default store;
