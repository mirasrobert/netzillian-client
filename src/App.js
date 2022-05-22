import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Pricing from './components/pages/Pricing'
import Team from './components/pages/Team'
import Contact from './components/pages/Contact'
import Terms from './components/pages/Terms'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import Board from './components/pages/Board'
import Alert from './components/other/Alert'
import Billing from './components/pages/Billing'
import Checkout from './components/pages/Checkout'
import Transactions from './components/pages/Transactions'
import ResetPassword from './components/pages/ResetPassword'
import RecoverPassword from './components/pages/RecoverPassword'
import Product from './components/pages/Product'

import Drawer from './components/layouts/Drawer'

// Toastify
import { ToastContainer } from 'react-toastify'

// MUI
import { CssBaseline } from '@material-ui/core'

import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/board/:id' component={Board} />
            <Route exact path='/drawer' component={Drawer} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/billing' component={Billing} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/transactions' component={Transactions} />
            <Route exact path='/forgot-password' component={ResetPassword} />
            <Route exact path='/our-product' component={Product} />
            <Route
              exact
              path='/reset/:token/email/:email'
              component={RecoverPassword}
            />
          </Switch>
        </Fragment>
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
