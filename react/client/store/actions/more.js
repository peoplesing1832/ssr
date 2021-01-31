import fetch from '@/util/fetch';

export const GET_MORE = 'GET_MORE';
export const GET_MORE_SUCCESS = 'GET_MORE_SUCCESS';
export const GET_MORE_ERROR = 'GET_MORE_ERROR';

export const createMore = () => ({
  type: GET_MORE,
});

export const creareMoreSuccess = (payload) => ({
  type: GET_MORE_SUCCESS,
  payload,
});

export const creareMoreError = (error) => ({
  type: GET_MORE_ERROR,
  error,
});

export const fetchMore = () => {
  return async (dispatch) => {
    try {
      dispatch(createMore());
      const payload = await fetch('接口地址');
      dispatch(creareMoreSuccess(payload));
    } catch (error) {
      dispatch(creareMoreError(error));
    }
  };
};
