import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Welcome from 'containers/Welcome'
import NotFound from 'containers/NotFound'

const history = createBrowserHistory()

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Welcome} />

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
