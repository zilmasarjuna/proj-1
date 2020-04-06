import PropTypes from 'prop-types'
import {
  Table, Input, Row, Col,
} from 'antd'
import { LayoutDashboard, Typo, Box } from 'components/elements'

const { Title } = Typo

const { Search } = Input

const columns = [{
  title: 'Nama Merchant',
  dataIndex: 'name',
  sortDirections: ['descend', 'ascend'],
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'No HP',
  dataIndex: 'phone',
  sortDirections: ['descend', 'ascend'],
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Store Type',
  dataIndex: 'store_type_name',
  sortDirections: ['descend', 'ascend'],
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Created At',
  dataIndex: 'created_at',
  sortDirections: ['descend', 'ascend'],
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Last Transaction',
  dataIndex: 'last_transaction_date',
  sortDirections: ['descend', 'ascend'],
  sorter: (a, b) => a.name.length - b.name.length,
}]

const MerchantList = ({ merchants }) => {
  const onChangeTable = (pagination, filters, sorter) => {
    // console.log('asd', sorter)
  }
  return (
    <LayoutDashboard active="2">
      <div className="title-page">
        <Title size={24}>
          Merchant
        </Title>
      </div>
      <Box>
        <div className="search-box">
          <Row>
            <Col span={8}>
              <Search
                size="large"
                placeholder="Search Nama/HP"
                onSearch={value => console.log(value)}
                style={{ width: '100%' }}
              />
            </Col>
          </Row>

        </div>
        <div className="table-box">
          <Table
            columns={columns}
            dataSource={merchants.list.data}
            onChange={onChangeTable}
            pagination={false}
            loading={merchants.list.isLoading}
          />
        </div>
      </Box>
    </LayoutDashboard>
  )
}

MerchantList.propTypes = {

}

export default MerchantList
