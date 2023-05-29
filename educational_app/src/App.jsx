import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Header} from './components';
import { DashBroad } from './screens';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <DashBroad/>
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
};

export default App;