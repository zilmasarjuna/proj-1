import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import history from 'utils/history'

export const mapStateToProps = (state) => {
  const {
    currentUser,
  } = state.root.auth

  return {
    currentUser,
  }
}

const publicComponent = (Component, redirect = false, redirectPath = '/welcome') => compose(
  connect(
    mapStateToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (!!this.props.currentUser && redirect) {
        history.push(redirectPath)
      }
    },
  }),
)(Component)

export default publicComponent
