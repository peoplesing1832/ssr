import NodeFetch from 'node-fetch';
import { isClient } from '@/util/env';

const fetch = isClient ? window.fetch : NodeFetch;

export default fetch;
