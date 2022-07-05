import React, { ReactNode } from 'react';
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';

import { wrapper } from '../store';
import App from '../components/App';

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute('media');
    });
  };
  tempFix();
};

Router.events.on('routeChangeComplete', routeChange);
Router.events.on('routeChangeStart', routeChange);

type ExtendedComponent = NextComponentType & {
  getLayout?: () => React.FC<{ children: ReactNode }>;
};

function SiteApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const renderComponent = (page: ReactNode) => (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
      </Head>
      <App path={router.pathname}>{page}</App>
    </>
  );

  const { getLayout: componentGetLayout } = Component as ExtendedComponent;

  const getLayout = componentGetLayout || ((page: JSX.Element) => page);

  return renderComponent(getLayout(<Component {...pageProps} />));
}

export default wrapper.withRedux(SiteApp);
