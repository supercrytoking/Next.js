import { useContext } from 'react';
import { UserManager } from 'oidc-client';

import { OidContext } from '../components/Providers/OidProvider';

const useOidService = (config: Record<string, any>) => {
  const userManager =
    typeof window !== 'undefined' ? new UserManager(config) : undefined;
  return {
    userManager,
    ...useContext(OidContext),
  };
};

export default useOidService;
