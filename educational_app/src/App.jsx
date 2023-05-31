import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components'
import { useLocation } from 'react-router-dom'

import './App.css'

const App = () => {
  const location = useLocation()

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/'

  return (
    <>
      {isHomePage ? null : <Header />}

      <ToastContainer />
      <div
        style={{
          overflow: isHomePage ? 'hidden' : 'auto',
          maxHeight: 'calc(100vh - 60px)',
        }}
      >
        <Container className='my-2'>
          <Outlet />
        </Container>
      </div>
    </>
  )
}

export default App
