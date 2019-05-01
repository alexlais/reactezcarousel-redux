import React from 'react'
import ReactDOM from 'react-dom'
import { Routing } from './routing'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './stores/'
import './style.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
