import React, { PropsWithChildren } from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: PropsWithChildren<any>) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="note" content="environment=development" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="manifest"
            href="/manifest.webmanifest"
            crossOrigin="anonymous"
          />
          <meta name="theme-color" content={'#071C5F'} />
          <link
            rel="icon"
            href="/favicon-32x32.png?v=17008431867a9ee7c09501afe7f72360"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/icons/icon-48x48.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/icon-72x72.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/icons/icon-96x96.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/icon-144x144.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/icon-192x192.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/icons/icon-256x256.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icons/icon-384x384.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/icons/icon-512x512.png?v=17008431867a9ee7c09501afe7f72360"
          />
          <meta name="description" content="lyonl Inc." />
          <title>Authentication - lyonl</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              // Include the UserVoice JavaScript SDK (only needed once on a page)
              UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//lyonl.uservoice.com/widget_environment/7TPu6l6vAv95A568MfP1g.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();
              
              //
              // UserVoice Javascript SDK developer documentation:
              // https://developer.uservoice.com/docs/widgets/overview/
              //
              
              // Set colors
              UserVoice.push(['set', {
              accent_color: '#2B78C5',
              trigger_color: 'white',
              trigger_background_color: 'rgba(46, 49, 51, 0.6)'
              }]);
              
              // Identify the user and pass traits
              // To enable, replace sample data with actual user traits and uncomment the line
              UserVoice.push(['identify', {
              //email: 'john.doe@example.com', // User’s email address
              //name: 'John Doe', // User’s real name
              //created_at: 1364406966, // Unix timestamp for the date the user signed up
              //id: 123, // Optional: Unique id of the user (if set, this should not change)
              //type: 'Owner', // Optional: segment your users by type
              //account: { // Account traits are only available on some plans
              // id: 123, // Optional: associate multiple users with a single account
              // name: 'Acme, Co.', // Account name
              // created_at: 1364406966, // Unix timestamp for the date the account was created
              // revenue: 9.99, // Decimal; recurring revenue of the account
              // ltv: 1495.00, // Decimal; lifetime value of the account
              // plan: 'Enhanced' // Plan name for the account
              //}
              }]);
              
              // Add default trigger to the bottom-right corner of the window:
              UserVoice.push(['addTrigger', {mode: 'satisfaction', trigger_position: 'bottom-right' }]);
              
              // Or, use your own custom trigger:
              //UserVoice.push(['addTrigger', '#id', { mode: 'satisfaction' }]);
              
              // Autoprompt for NPS® Rating (only displayed under certain conditions)
              UserVoice.push(['autoprompt', {}]);
          `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window['_fs_debug'] = false;
              window['_fs_host'] = 'fullstory.com';
              window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
              window['_fs_org'] = '17TMVR';
              window['_fs_namespace'] = 'FS';
              (function(m,n,e,t,l,o,g,y){
                  if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                  g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                  o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                  y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                  g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                  g.anonymize=function(){g.identify(!!0)};
                  g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                  g.log = function(a,b){g("log",[a,b])};
                  g.consent=function(a){g("consent",!arguments.length||a)};
                  g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                  g.clearUserCookie=function(){};
                  g.setVars=function(n, p){g('setVars',[n,p]);};
                  g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                  if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                  g._v="1.3.0";
              })(window,document,window['_fs_namespace'],'script','user');
          `,
            }}
          />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
