import { Dropdown } from 'antd'
import { BellOutlined } from '@ant-design/icons';
const ListNotif = (
  <div>asd</div>
)

const DropdownNotif = () => {
  return (
    <Dropdown overlay={ListNotif} trigger={['click']} placement="bottomRight" overlayClassName="dropdown-notif">
      <BellOutlined style={{ fontSize: '28px', padding: '21px 16px'}} />
    </Dropdown>
  )
}

export default DropdownNotif