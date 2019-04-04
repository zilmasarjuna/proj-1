// Requires authentication to access SecureComponent

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {compose, branch, mapProps, lifecycle, renderComponent} from 'recompose'
import {isEmpty, omit, identity} from 'lodash'
import {authenticateByToken} from 'actions/Auth'
import Preloader from 'components/base/Preloader'

export const mapStateToProps = (state) => {
  const {
    isAuthenticating,
    currentUser,
  } = isEmpty(state.auth)
    ? { isAuthenticating: false, currentUser: null }
    : state.auth

  return {
    isAuthenticating,
    currentUser,
  }
}

const mapDispatchToProps = dispatch => ({
  authenticateByToken: bindActionCreators(authenticateByToken, dispatch),
})

const requireAuthentication = (SecureComponent) => {
  const isAuthenticated = ({ isAuthenticating, currentUser }) => (
    !isAuthenticating && !!currentUser
  )

  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    lifecycle({
      componentDidMount() { !isAuthenticated(this.props) && this.props.authenticateByToken() },
    }),
    mapProps(
      props => omit(props, ['authenticateByToken'])
    ),
    branch(
      isAuthenticated,
      identity,
      renderComponent(Preloader)
    ),
  )(SecureComponent)
}

export default requireAuthentication
