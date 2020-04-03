import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers } from 'recompose'
import DashboardView from 'components/page/dashboard/Dashboard'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(DashboardView)
