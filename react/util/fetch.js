import NodeFetch from 'node-fetch';
import { isClient } from '@/util/env';

const fetch = (input, init) => {
  return isClient() ? window.fetch(input, init) : NodeFetch(input, init);
}

export default fetch;
