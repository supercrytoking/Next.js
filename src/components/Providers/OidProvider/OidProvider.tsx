import React, { ReactNode, createContext, useRef, useEffect } from 'react';
import { UserManager, User } from 'oidc-client';
import { Store } from 'redux';

import { authOidStoreUser } from '../../../store/actions/auth';

export interface OidProviderProps {
  userManager: UserManager;
  children?: ReactNode;
  store: Store;
}

export interface OidContextValue {
  logout: () => void;
  signinRedirect: () => void;
  isAuthenticated: () => void;
  createSigninRequest: () => void;
  signinSilentCallback: () => void;
  signinRedirectCallback: () => void;
  signoutRedirectCallback: () => void;
  getUser: () => Promise<User>;
}

export const OidContext = createContext({} as OidContextValue);

export const OidProvider: React.FC<OidProviderProps> = ({
  children,
  userManager: manager,
  store,
}) => {
  const userManager = useRef<UserManager>();

  useEffect(() => {
    userManager.current = manager;

    const handleUserLoaded = (user: any) => {
      console.log(`user loaded: ${user}`);
      store.dispatch(authOidStoreUser(user));
    };

    const handleUserUnloaded = () => {
      console.log(`user unloaded`);
    };

    const handleAccessTokenExpiring = () => {
      console.log(`user token expiring`);
    };

    const handleAccessTokenExpired = () => {
      console.log(`user token expired`);
    };

    const handleUserSignedOut = () => {
      console.log(`user signed out`);
    };

    if (userManager.current) {
      const umInstance = userManager.current as UserManager;
      umInstance.events.addUserLoaded(handleUserLoaded);
      umInstance.events.addUserUnloaded(handleUserUnloaded);
      umInstance.events.addAccessTokenExpiring(handleAccessTokenExpiring);
      umInstance.events.addAccessTokenExpired(handleAccessTokenExpired);
      umInstance.events.addUserSignedOut(handleUserSignedOut);

      return function cleanup() {
        umInstance.events.removeUserLoaded(handleUserLoaded);
        umInstance.events.removeUserUnloaded(handleUserUnloaded);
        umInstance.events.removeAccessTokenExpiring(handleAccessTokenExpiring);
        umInstance.events.removeAccessTokenExpired(handleAccessTokenExpired);
        umInstance.events.removeUserSignedOut(handleUserSignedOut);
      };
    }
  }, [manager, store]);

  const getUser = async (): Promise<User> => {
    const user = await (userManager.current as UserManager).getUser();
    if (!user) {
      return (userManager.current as UserManager).signinRedirectCallback();
    }
    return user;
  };

  const signinRedirect = () => {
    localStorage.setItem('redirectUri', window.location.pathname);
    (userManager.current as UserManager).signinRedirect({});
  };

  const isAuthenticated = () => {
    const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || '';
    const identityClientId = process.env.NEXT_PUBLIC_IDENTITY_CLIENT_ID || '';
    const storageKey = `oidc.user:${authUrl}:${identityClientId}`;
    const oidcStorage =
      typeof window !== 'undefined'
        ? JSON.parse(sessionStorage.getItem(storageKey) || '')
        : '';
    return !!oidcStorage && !!oidcStorage.access_token;
  };

  const createSigninRequest = () => {
    return (userManager.current as UserManager).createSigninRequest();
  };

  const signinSilentCallback = () => {
    (userManager.current as UserManager).signinSilentCallback();
  };

  const signinRedirectCallback = () => {
    (userManager.current as UserManager).signinRedirectCallback();
  };

  const signoutRedirectCallback = async () => {
    await (userManager.current as UserManager).signoutRedirectCallback();
    localStorage.clear();
    window.location.replace(process.env.NEXT_PUBLIC_PUBLIC_URL || '');
    (userManager.current as UserManager).clearStaleState();
  };

  const logout = () => {
    const manager = userManager.current as UserManager;
    manager.signoutRedirect({
      id_token_hint: localStorage.getItem('id_token'),
    });
    manager.clearStaleState();
  };

  return (
    <OidContext.Provider
      value={{
        logout,
        signinRedirect,
        isAuthenticated,
        createSigninRequest,
        signinSilentCallback,
        signinRedirectCallback,
        signoutRedirectCallback,
        getUser,
      }}
    >
      {children}
    </OidContext.Provider>
  );
};
