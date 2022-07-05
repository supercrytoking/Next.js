/**
 * Application component
 * Register providers, theme, etc...
 */
import React, { ReactNode } from 'react';
import { Grommet } from 'grommet';

// Components
import Layout from '../Layout';
import { AuthProvider } from '../Providers/AuthProvider';
import { AppGlobalStyle } from './App.styled';

// App wide theme and styles
import mainTheme from '../../themes/main';

// OIDC i
import useOidService from '../../hooks/useOidService';
import { oidcConfig } from '../../services/config';

export interface pageContextProps {
  id?: string;
  layout?: string;
}

export interface AppProps {
  children: ReactNode;
  pageContext?: {
    layout?: string;
  };
  path?: string;
}

const App = ({ children }: AppProps) => {
  const { userManager } = useOidService(oidcConfig);
  return (
    <AuthProvider>
      <Grommet theme={mainTheme}>
        <AppGlobalStyle />
        <Layout>{children}</Layout>
      </Grommet>
    </AuthProvider>
  );
};

export default App;
