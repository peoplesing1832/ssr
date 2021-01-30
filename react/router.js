import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from 'client/views/Home';
import More from 'client/views/More';
import NotFound from 'client/views/NotFound';

const routerConfig = [
  // 重定向 / -> /home
  {
    path: '/',
    exact: true,
    render: ({ location }) => (
      <Redirect
        to={{
          pathname: '/home',
          state: { from: location }
        }}
      />
    ),
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/more',
    exact: true,
    component: More,
  },
  {
    path: '*',
    component: NotFound,
  }
];

export default routerConfig;
