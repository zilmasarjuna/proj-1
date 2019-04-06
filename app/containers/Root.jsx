import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router, Route, Switch } from 'react-router-dom'
import history from 'utils/history'
import Login from 'containers/Login'
import NotFound from 'containers/NotFound'
import Dashboard from 'containers/Dashboard'

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route component={NotFound} />
        </Switch>
      </Router>

    </PersistGate>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape().isRequired,
  persistor: PropTypes.shape().isRequired,
}

export default Root
