import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: process.env.REACT_APP_IDP_SERVER_URL,
  client_id: process.env.REACT_APP_IDP_CLIENT_ID,
  client_secret: process.env.REACT_APP_IDP_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_IDP_REDIRECT_URI,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
