import useAppStore from './modules/app';
import useUserStore from './modules/user';
import usePermissionStore from './modules/permission';
import useLicenseStore from './modules/license';
import useUserTokenStore from './modules/user-token';

const useStore = () => ({
  user: useUserStore(),
  app: useAppStore(),
  permission: usePermissionStore(),
  license: useLicenseStore(),
  userToken: useUserTokenStore()
});

export default useStore;
