import { Container, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../../../public/image/logo1.png'

import './sytle.css'
const Hero = () => {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    navigate('/login')
  }
  return (
    <div className=' py-5 hero'>
      <Container className='d-flex justify-content-center hero-container'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card  w-75'>
          <div>
            <img className='hero-logo' src={logo} alt='logo' />
          </div>

          <h1 className='text-center mb-4 hero-title'>Ready to Learn?</h1>
          <p className='text-center mb-4 hero-sub'>
            Create and Personalise your revision FlashCards
          </p>
          <div className='d-flex'>
            <Button onClick={handleGetStarted} className='me-3 hero-btn'>
              Get Started
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
