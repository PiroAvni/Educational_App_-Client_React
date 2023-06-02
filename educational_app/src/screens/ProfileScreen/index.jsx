import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/FormContainer/index'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { useUpdateUserMutation } from '../../slices/usersApiSlice/usersApiSlice'
import { setCredentials } from '../../slices/authSlice/authSlice'
import { InputBox } from '../../components'
import logo from '../../../public/image/iconprofile.png'
import './style.css'

const ProfileScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const [updateProfile, { isLoading }] = useUpdateUserMutation()

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.email, userInfo.name])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        console.log(res)
        dispatch(setCredentials(res))
        toast.success('Profile updated successfully')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }
  return (
    <FormContainer>
      <h1 className='sign-in-title'>Update Profile</h1>

      <Form className='form-container2' onSubmit={submitHandler}>
        <div>
          <img
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            src={logo}
          />
        </div>

        <Form.Group className='my-2' controlId='name'>
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='sign-in-up'
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='email'>
          {/* <Form.Label>Email Address</Form.Label> */}
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='sign-in-up'
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='password'>
          {/* <Form.Label>Password</Form.Label> */}
          <InputBox
            type='null'
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
          <p className='started-button'> Update</p>
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen
