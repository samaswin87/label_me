import React from 'react';

const Login = React.lazy(() => import('/bundles/components/Login'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Login' },
]

export default routes;
