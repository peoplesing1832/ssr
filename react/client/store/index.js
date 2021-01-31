import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'client/store/reducers';

const {
  homeReducer,
  moreReducer,
} = reducers;

const reducer = combineReducers({
  home: homeReducer,
  more: moreReducer,
});

const store = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default store;
