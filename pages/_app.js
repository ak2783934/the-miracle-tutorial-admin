import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  const [redirectUri, setRedirectUri] = useState(
    "https://the-miracle-tutorial-admin.vercel.app/"
  );
  useEffect(() => {
    setRedirectUri(window.location.origin);
  }, []);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
