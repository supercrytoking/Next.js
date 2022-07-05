import { DOMAIN_NAME } from '../store/constants';
import queryString from 'query-string';

const useOrganizationName = () => {
  if (process.env.NODE_ENV === 'development') {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const parsed = queryString.parse(search);
    return parsed.tenant_name ? (parsed.tenant_name as string) : 'beta';
  } else {
    const host = typeof window !== 'undefined' ? window.location.host : '';
    return host.lastIndexOf(`.${DOMAIN_NAME}`) > -1
      ? host.substring(0, host.lastIndexOf(`.${DOMAIN_NAME}`))
      : 'beta';
  }
};

export default useOrganizationName;
