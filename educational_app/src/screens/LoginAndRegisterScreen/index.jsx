import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {LoginScreen,RegisterScreen} from '..';

function LoginAndRegisterScreen() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="login" title="Login">
        <LoginScreen />
      </Tab>
      <Tab eventKey="register" title="Register">
        <RegisterScreen />
      </Tab>
   
    </Tabs>
  );
}

export default LoginAndRegisterScreen;