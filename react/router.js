import Home from 'client/views/Home';
import More from 'client/views/More';

const routerConfig = [
  // 重定向 / -> /home
  {
    path: '/',
    exact: 'true',
  },
  {
    path: '/home',
    exact: 'true',
    component: Home,
  },
  {
    path: '/more',
    exact: 'true',
    component: More,
  },
];

export default routerConfig;
