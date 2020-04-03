import classNames from 'classnames'

import { Layout } from 'antd'

const { Header } = Layout

const HeaderLayout = () => (
  <Header className="header">
    <div className="logo f-left">
      <img src="/assets/otto_kasir.svg" alt="logo" />
    </div>
    <div className="f-right">
      <button className="notification">
        <img src="/assets/icon-notification.svg" alt="notif" />
      </button>
      <button className="profile">
        <img src="/assets/icon-profile.png" alt="profile" />
      </button>
    </div>
  </Header>
)

export default HeaderLayout