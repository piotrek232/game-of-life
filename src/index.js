import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import App from './App';
import theme from './theme';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);