import { useContext } from 'react';
import {
  AuthContext,
  AuthTokenData,
} from '../components/Providers/AuthProvider';
import jwt from 'jsonwebtoken';

const useAuth = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
  let mustSelectHierarchy = false;

  if (token) {
    const { must_select_hierarchy } = jwt.decode(token) as AuthTokenData;
    mustSelectHierarchy = Boolean(Number(must_select_hierarchy));
    console.log("mustSelectHierarchy",mustSelectHierarchy);
  }
  return {
    mustSelectHierarchy,
    ...useContext(AuthContext),
  };
};
export default useAuth;
