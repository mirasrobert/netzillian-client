import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'

// Redux
import store from './store'
import { loadUser } from './actions/auth'

store
  .dispatch(loadUser())
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  })
  .catch((e) => console.error(e))
