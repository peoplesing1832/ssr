import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {
  homeReducer,
  moreReducer,
} from 'client/store/reducers';

const reducer = combineReducers({
  home: homeReducer,
  more: moreReducer,
});

const store = () => {
};

export default store;
