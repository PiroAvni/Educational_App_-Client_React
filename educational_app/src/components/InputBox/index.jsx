import { useState } from 'react'
import { Form } from 'react-bootstrap'
import './style.css'
const InputBox = ({ placeholder = null, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(true)

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <div className='input-group'>
      <Form.Control
        type={showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='sign-in-up form-control'
      />
      <span className='show-hide' onClick={handleShowPassword}>
        {showPassword ? 'Show' : 'Hide'}
      </span>
    </div>
  )
}

export default InputBox
