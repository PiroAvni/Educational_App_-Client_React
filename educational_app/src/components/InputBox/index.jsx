import { useState } from 'react'
import { Form } from 'react-bootstrap'

const InputBox = ({ placeholder = null, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(true)

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <>
      <Form.Control
        type={showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></Form.Control>
      {showPassword ? (
        <span onClick={handleShowPassword}>Show</span>
      ) : (
        <span onClick={handleShowPassword}>Hide</span>
      )}
    </>
  )
}

export default InputBox
