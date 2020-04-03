import { Dropdown } from 'antd'

const MenuProfile = (
  <div>
    Menu
  </div>
)

const DropdownProfile = () => {
  return (
    <Dropdown overlay={MenuProfile} trigger={['click']} placement="bottomRight" overlayClassName="dropdown-profile">
      <div className="header-profile">
        <div className="profile-pict">
          <span>MG</span>
        </div>
        <div className="profile-name">
          Musti Gunawan
        </div>
        <div className="icon-profile">
          <img src="/assets/icon-bottom.svg" alt="icon-profile"/>
        </div>
      </div>
    </Dropdown>
  )
}

export default DropdownProfile