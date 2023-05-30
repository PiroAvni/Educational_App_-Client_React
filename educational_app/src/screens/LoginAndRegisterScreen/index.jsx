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
    <div className='log-reg-container'>
      <Tabs
        defaultActiveKey='profile'
        id='fill-tab-example'
        className='mb-3'
        fill
        activeKey={active}
        onSelect={activeTabHandler}
      >
        <Tab className='login-tab' eventKey='login' title='Login'>
          <LoginScreen />
        </Tab>
        <Tab className='registration-tab' eventKey='register' title='Register'>
          <RegisterScreen />
        </Tab>
      </Tabs>
    </div>
  )
}

export default LoginAndRegisterScreen
