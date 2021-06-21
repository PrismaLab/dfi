import { HomePage } from './';

export default {
  path: '/home',
  childRoutes: [
    { path: 'index', component: HomePage, isIndex: true },
  ],
};
