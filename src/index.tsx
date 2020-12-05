import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import mainReducer from './store/reducers/index'
import AppRouting from './app/AppRouting'
import {createStore} from 'redux';
import { ConnectedRouter } from 'connected-react-router'
import middlewares, { history } from './store/middlewares/index'

const store = createStore(mainReducer(history), middlewares)
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouting/>
    </ConnectedRouter>
  </Provider>,
  rootElement
)

