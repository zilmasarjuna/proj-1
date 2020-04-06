import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
  MenuOutlined,
} from '@ant-design/icons'

import DropdownNotif from '../Dropdown/DropdownNotif'
import DropdownProfile from '../Dropdown/DropdownProfile'

const { Header, Sider, Content } = Layout

const { SubMenu } = Menu

class LayoutDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }))
  }

  render() {
    const {
      children,
      active,
    } = this.props
    const {
      collapsed,
    } = this.state
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          width="260"
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
        >
          <div className="logo">
            <img src="/assets/otto_kasir.svg" alt="logo" />
            {!collapsed && (<span>Ottokasir Web Portal</span>)}
          </div>
          <div className="menu-side">
            <div className="title">
              <h4>Menu</h4>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[active]}>
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/merchant">
                  <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                  <span>Manage Merchant</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/store">
                  <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                  <span>Manage Store Type</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub-item"
                title={(
                  <>
                    <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                    <span>Manage Product</span>
                  </>
)}
              >
                <Menu.Item key="sub-item-1">
                  <Link to="/product">
                    Master Product
                  </Link>
                </Menu.Item>
                <Menu.Item key="sub-item-1">
                  <Link to="/all-product">
                    All Product
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <Link to="/transaction">
                  <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                  <span>Transaction</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/report">
                  <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                  <span>Report</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 24px', height: 72, lineHeight: 'initial' }}>
            {React.createElement(MenuOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className="f-right header-right">
              <DropdownNotif />
              <DropdownProfile />
            </div>
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

LayoutDashboard.propTypes = {
  children: PropTypes.any,
}

export default LayoutDashboard
