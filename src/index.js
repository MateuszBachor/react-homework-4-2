import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App onSubmit={values => console.log(values)} />
  </React.StrictMode>
);
