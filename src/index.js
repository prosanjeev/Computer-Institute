import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { theme } from './theme'
import App from './App';
import { Provider } from 'react-redux';
import store from './AFS Panel/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ToastContainer/>
      <Provider store={store}>
    <App />
  </Provider>,
    </ChakraProvider>
  </React.StrictMode>
);



