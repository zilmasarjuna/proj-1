
import { Layout, Menu, Icon } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
 
} from '@ant-design/icons';

import DropdownNotif from '../Dropdown/DropdownNotif'
import DropdownProfile from '../Dropdown/DropdownProfile'

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu

class LayoutDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {
      children 
    } = this.props
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width="260" trigger={null} collapsible collapsed={this.state.collapsed} breakpoint="lg"
      collapsedWidth="0">
          <div className="logo">
            <img src="/assets/otto_kasir.svg" alt="logo" />
            <span>Ottokasir Web Portal</span>
          </div>
          <div className="menu-side">
            <div className="title">
              <h4>Menu</h4>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                <span>Manage Merchant</span>
              </Menu.Item>
              <Menu.Item key="3">
                <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                <span>Manage Store Type</span>
              </Menu.Item>
              <SubMenu
                key="sub-item"
                title={
                  <>
                    <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                    <span>Manage Product</span>
                  </>
                }
              >
                <Menu.Item key="sub-item-1">Master Product</Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                <span>Transaction</span>
              </Menu.Item>
              <Menu.Item key="5">
                <img src="/assets/dashboard-menu.svg" alt="dashboard-menu" className="anticon" />
                <span>Manage Store Type</span>
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
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutDashboard