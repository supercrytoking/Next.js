/**
 * Auth provider
 *
 * Brings auth context to the app
 */
import React, { createContext, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import jwt from 'jsonwebtoken';

import dayjs from '../../../libs/dayjs';

// Actions and hooks
import {
  authLoginRequestAction,
  authLogoutRequestAction,
  authTokenRefreshRequestAction,
} from '../../../store/actions/auth';
import useOrganizationName from '../../../hooks/useOrganizationName';
import { Credentials } from '../../../types/auth';
import { REDIRECT_HOST_NAME } from '../../../store/constants';

interface AuthProviderProps {
  children?: ReactNode;
}

export interface AuthTokenData {
  exp: number;
  must_select_hierarchy: string;
}

export interface AuthProviderValue {
  login: (arg: Credentials) => void;
  logout: () => void;
  refresh: () => void;
  processToken: (url: string) => void;
}

export const AuthContext = createContext({} as AuthProviderValue);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const organizationName = useOrganizationName();

  const login = (values: Credentials) => {
    dispatch(authLoginRequestAction({ ...values, organizationName }));
  };

  const logout = () => {
    clearRefreshTokenTimeout();
    dispatch(authLogoutRequestAction());
  };

  const clearRefreshTokenTimeout = () => {
    const tokenRefreshTimeout =
      typeof window !== 'undefined'
        ? localStorage.getItem('tokenRefreshTimeout')
        : '';
    if (tokenRefreshTimeout) {
      clearTimeout(Number(tokenRefreshTimeout));
      localStorage.removeItem('tokenRefreshTimeout');
    }
  };

  const refresh = () =>
    new Promise((resolve) => {
      dispatch(authTokenRefreshRequestAction());
      resolve({});
    });

  const extractTokenData = (token: string) => {
    const { exp } = jwt.decode(token) as AuthTokenData;
    return { exp };
  };

  const isTokenExpired = (exp: number) => exp < dayjs().unix();

  /**
   * Checks token validity
   */
  const processToken = (redirectUrl: string) => {
    console.log('AuthProvider: processToken...');
    const token = localStorage.getItem('accessToken');

    if (token) {
      const { exp } = extractTokenData(token);

      if (isTokenExpired(exp)) {
        logout();
      } else {
        const newLocation = redirectUrl
          ? redirectUrl
          : `http${
              process.env.NODE_ENV === 'development' ? '' : 's'
            }://${REDIRECT_HOST_NAME}/`;
        window.location.href = `${newLocation}?access_token=${token}`;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        refresh,
        processToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
