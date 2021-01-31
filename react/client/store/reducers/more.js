import * as MoreActions from 'client/store/actions/more';

const defaultState = {
  list: [],
  load: false,
  error: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case MoreActions.GET_MORE:
      return {...state, load: true, error: false};
    case MoreActions.GET_MORE_SUCCESS:
      const { payload } = action;
      return { load: false, list: payload, error: false };
    case MoreActions.GET_MORE_ERROR:
      return { ...state, load: false, error: true };
    default:
      return defaultState;
  }
};

export default reducer;
