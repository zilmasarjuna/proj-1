import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers, lifecycle } from 'recompose'

import { getMerchantList } from 'actions/Merchants'

import MerchantListView from 'components/page/merchants/MerchantList'

const mapStateToProps = (state) => {
  const {
    merchants,
  } = state.root

  return {
    merchants,
  }
}

const mapDispatchToProps = dispatch => ({
  getList: bindActionCreators(getMerchantList, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.getList()
    },
  }),
)(MerchantListView)
