import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Browser from 'utils/Browser'

export const mapStateToProps = (state) => {
  const {
    isLoggedIn,
  } = state.root.auth

  return {
    isLoggedIn,
  }
}

const publicComponent = (Component, redirect = false, redirectPath = '/dashboard') => compose(
  connect(
    mapStateToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (this.props.isLoggedIn && redirect) {
        Browser.setWindowHref(redirectPath)
      }
    },
  }),
)(Component)

export default publicComponent
