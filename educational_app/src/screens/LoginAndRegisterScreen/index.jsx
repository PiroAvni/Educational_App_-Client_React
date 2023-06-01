import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { LoginScreen, RegisterScreen } from '..'
import './style.css'

function LoginAndRegisterScreen() {
  const [active, setActive] = useState('login')

  const activeTabHandler = (tab) => {
    setActive(tab)
  }

  return (
    <div className='more-container'>
      <div className='log-reg-container'>
        <Tabs
          defaultActiveKey='profile'
          id='fill-tab-example'
          className='mb-3'
          fill
          activeKey={active}
          onSelect={activeTabHandler}
        >
          <Tab
            eventKey='login'
            title='Login'
            className={active === 'login' ? 'active-tab' : 'inactive-tab'}
          >
            <LoginScreen />
          </Tab>
          <Tab
            eventKey='register'
            title='Register'
            className={active === 'register' ? 'active-tab' : 'inactive-tab'}
          >
            <RegisterScreen />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default LoginAndRegisterScreen
