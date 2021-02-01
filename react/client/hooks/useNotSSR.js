import { useEffect } from 'react';

const useNotSSR = (cb) => {
  useEffect(() => {
    if (window.__INITIAL_STATE__) {
      window.__INITIAL_STATE__ = null;
    } else {
      cb();
    }
  }, []);
};

export default useNotSSR;
