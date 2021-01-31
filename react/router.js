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
    getInitialData: Home.getInitialData,
  },
  {
    path: '/more',
    exact: true,
    component: More,
    getInitialData: More.getInitialData,
  },
  {
    path: '*',
    component: NotFound,
  }
];

export default routerConfig;
