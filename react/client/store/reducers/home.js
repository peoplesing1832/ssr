import * as HomeActions from 'client/store/home';

const defaultState = {
  list: [],
  load: false,
  error: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HomeActions.GET_HOME:
      return {...state, load: true, error: false};
    case HomeActions.GET_HOME_SUCCESS:
      const { payload } = action;
      return { load: false, list: payload, error: false };
    case HomeActions.GET_HOME_ERROR:
      return { ...state, load: false, error: true };
    default:
      return defaultState;
  }
};

export default reducer;
