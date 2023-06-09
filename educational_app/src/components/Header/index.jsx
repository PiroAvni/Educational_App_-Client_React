
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt, FaBookmark } from 'react-icons/fa';
import {CgProfile,CgLogOut} from 'react-icons/cg';
import {GiProgression} from 'react-icons/gi';
import {TbCards} from'react-icons/tb';
import {GoDashboard} from'react-icons/go';
import {BiBookAdd} from'react-icons/bi';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../../public/image/logo1.png'
import { useLogoutMutation } from '../../slices/usersApiSlice/usersApiSlice'
import { logout } from '../../slices/authSlice/authSlice'

import './style.css'
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <header>

      <Navbar variant='dark' expand='lg' collapseOnSelect>

        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img className='logo' src={logo} alt='logo' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>

                <>
                  <LinkContainer to='/dashboard'>
                    <Nav.Link >
                      <GoDashboard /> DashBoard
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/add-cards'>
                    <Nav.Link className='nav-link'>
                      <BiBookAdd /> Add Flashcards
                    </Nav.Link>
                  </LinkContainer>
                  {/* <LinkContainer to='/dashboard'>
                    <Nav.Link>
                       <TbCards/> Flashcards
                    </Nav.Link>
                  </LinkContainer> */}
                  <LinkContainer to='/GenericFlashCard'>
                    <Nav.Link>
                       <TbCards/> Generic FlashCards
                    </Nav.Link>
                  </LinkContainer>


                  
                </>

                  <NavDropdown title={userInfo.name} id='name'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>
                        {' '}
                        <CgProfile /> Profile
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/bookmarks'>
                      <NavDropdown.Item>
                        <FaBookmark />
                        Bookmark
                      </NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/progress'>
                      <NavDropdown.Item>
                        <GiProgression /> Progress
                      </NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>
                      <CgLogOut /> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
// : (
//   <>
//     <LinkContainer to='/login'>
//       <Nav.Link>
//         <FaSignInAlt /> Sign In
//       </Nav.Link>
//     </LinkContainer>
//     <LinkContainer to='/register'>
//       <Nav.Link>
//         <FaSignOutAlt /> Sign Up
//       </Nav.Link>
//     </LinkContainer>
//   </>
// )
