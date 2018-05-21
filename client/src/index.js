import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

import App from './components/App/App';

import './index.css';
import './styles/index';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
// registerServiceWorker();
