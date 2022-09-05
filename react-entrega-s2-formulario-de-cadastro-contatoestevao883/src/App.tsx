
import { Global } from './styles/Global/global';
import Routes from './routes';
import Provider from './conxtexts';
import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider>
      <Global />
      <Routes />
      <ToastContainer />
    </Provider>
  );
}

export default App;
