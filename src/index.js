import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import baseStyles from './styles/index'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const render = () => {
  baseStyles()

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

registerServiceWorker()
