import '../styles/globals.css'
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from "@material-ui/core/CssBaseline"
import {RecoilRoot} from 'recoil'

export default function MyApp(props) {
  const { Component, pageProps } = props;


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
 
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
        {/* </Paper> */}

    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
