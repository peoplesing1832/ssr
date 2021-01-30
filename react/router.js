import Home from 'client/views/Home';
import More from 'client/views/More';

const routerConfig = [
  {
    path: '/home',
    exact: 'true',
    component: Home,
  },
  {
    path: '/more',
    exact: 'true',
    component: More,
  }
];

export default routerConfig;
