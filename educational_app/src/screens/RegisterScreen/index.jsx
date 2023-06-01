import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { FormContainer, Loader } from '../../components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation } from '../../slices/usersApiSlice/usersApiSlice'
import { setCredentials } from '../../slices/authSlice/authSlice'
import { toast } from 'react-toastify'
import { InputBox } from '../../components'
import './style.css'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await register({ name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate(redirect)
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }
  return (
    <>
      <h1 className='sign-in-title'>Register</h1>
      <Form className='form-container' onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='sign-in-up form-control'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          {/* <Form.Label>Email Address</Form.Label> */}
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='sign-in-up form-control'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          {/* <Form.Label>Password</Form.Label> */}
          <InputBox
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputBox>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          {/* <Form.Label>Confirm Password</Form.Label> */}
          <InputBox
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></InputBox>
        </Form.Group>

        <Button type='submit' variant='primary' className='sign-btn'>
          <p className='started-button '>Register</p>
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col
          style={{ color: 'black', paddingTop: '20px' }}
          className='text-center'
        >
          Already have an account?{' '}
          <Link style={{ color: 'black' }} to={`/login`}>
            Login
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default RegisterScreen
