import { Container, Card} from 'react-bootstrap';
import './style.css'

const Deck = ({title, img}) => {
  return (
    <div className=' py-5 Deck'>
    <Container className='d-flex justify-content-center deck-container'>
      <Card className='p-5 d-flex flex-column align-items-center deck-card  w-75'>
        <div>
          <div className="deck-logo">{img}</div> 
        </div>

        <h2 className='text-center mb-4 deck-title'>{title}</h2>
      
      </Card>
    </Container>
  </div>
  )
}

export default Deck