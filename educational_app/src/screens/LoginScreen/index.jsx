import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
// import FormContainer from '../../components/FormContainer/index'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../slices/usersApiSlice/usersApiSlice'
import { setCredentials } from '../../slices/authSlice/authSlice'
import { toast } from 'react-toastify'
import { InputBox } from '../../components'
// import Loader from '../../components';
import './style.css'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('./dashboard')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <h1 className='sign-in-title'>Sign In</h1>

      <Form className='form-container' onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          {/* <Form.Label className='email-address'>Email Address</Form.Label> */}
          <Form.Control
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='sign-in-up form-control'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          {/* <Form.Label className='password'>Password</Form.Label> */}
          <InputBox
            type='null'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputBox>
        </Form.Group>

        <Button
          disabled={isLoading}
          type='submit'
          variant='primary'
          className='sign-btn'
        >
          <p className='started-button '>Sign In</p>
        </Button>
      </Form>

      {/* {isLoading && <Loader />} */}

      <Row className='py-3'>
        <Col
          className='text-center'
          style={{ color: 'black', paddingTop: '20px' }}
        >
          New Customer? <Link style={{ color: 'black' }} to='/register'></Link>
        </Col>
      </Row>
    </>
  )
}

export default LoginScreen
