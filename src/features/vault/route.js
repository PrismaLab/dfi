import { VaultPage } from './';

export default {
  path: '/',
  childRoutes: [
    { path: 'vault', component: VaultPage, isIndex: true },
  ],
};
