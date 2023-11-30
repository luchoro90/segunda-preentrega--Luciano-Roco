import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';




const Tarjeta = ({
  img = "",
  title = "TITLE",
  text = "",
  precio = 0,
  categoria = "",
}) => {

  return (

    <div className='Card-container'>

      <Card border="light" style={{ width: '18.5rem' }} className='Card-only'>
        <Card.Img src={img} className='Card-img' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Card.Text>
            $ {precio}
          </Card.Text>
          <Card.Text>
            {categoria}
          </Card.Text>
          <Button variant="primary">COMPRAR</Button>
        </Card.Body>
      </Card>
    </div>

  );
}

export default Tarjeta;