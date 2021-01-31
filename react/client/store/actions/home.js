export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_ERROR = 'GET_HOME_ERROR';

export const createHome = () => ({
  type: GET_HOME,
});

export const creareHomeSuccess = (payload) => ({
  type: GET_HOME_ERROR,
  payload,
});

export const creareHomeError = (error) => ({
  type: GET_MORE_ERROR,
  error,
});

export const fetchHome = () => {
  return async (dispatch) => {
    try {
      dispatch(createHome());
      const payload = await fetch('接口地址');
      dispatch(creareHomeSuccess(payload));
    } catch (error) {
      dispatch(creareHomeError(error));
    }
  };
};
