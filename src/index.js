import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './route';
import store from './reducers';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();

