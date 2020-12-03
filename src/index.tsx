import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import mainReducer from './store/reducers/index'
import AppRouting from './app/AppRouting'
import {createStore} from 'redux';
// import store from './store'
const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <AppRouting/>
  </Provider>,
  rootElement
)

