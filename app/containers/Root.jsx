import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router, Route, Switch } from 'react-router-dom'
import history from 'utils/history'
import privateComponent from 'utils/hocs/privateComponent'
import publicComponent from 'utils/hocs/publicComponent'
import PublicLayout from 'containers/layouts/PublicLayout'
import PrivateLayout from 'containers/layouts/PrivateLayout'

import Login from 'containers/login/Login'
import NotFound from 'containers/NotFound'
import Welcome from 'containers/welcome/Welcome'
import Dashboard from 'containers/dashboard/Dashboard'

const PublicRoute = (props) => {
  const {
    component: Component,
    redirect,
    redirectPath,
    ...rest
  } = props

  const PublicLayoutView = publicComponent(PublicLayout, redirect, redirectPath)

  return (
    <Route
      {...rest}
      render={matchProps => (
        <PublicLayoutView>
          <Component {...matchProps} />
        </PublicLayoutView>
      )}
    />
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const PrivateLayoutView = privateComponent(PrivateLayout)

  return (
    <Route
      {...rest}
      render={matchProps => (
        <PrivateLayoutView>
          <Component {...matchProps} />
        </PrivateLayoutView>
      )}
    />
  )
}

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router history={history}>
        <Switch>
          <PublicRoute redirect exact path="/" component={Login} />
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/dashboard" component={Dashboard} />

          <PublicRoute component={NotFound} />
        </Switch>
      </Router>

    </PersistGate>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape().isRequired,
  persistor: PropTypes.shape().isRequired,
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
}

PublicRoute.propTypes = {
  component: PropTypes.any,
  redirect: PropTypes.bool,
  redirectPath: PropTypes.string,
}

export default Root
