import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notificacion from './CartWidget';
import './NavBar.css';
import Logo from './logo';


const Barranav = () => {
    return (
        <>
            <Navbar expand="lg" className="barra-gral">
                <Container className="barra ">
                    <Navbar.Brand href="/" className='barra-brand'><Logo /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/ItemlistContainer">Productos</Nav.Link>
                            
                        </Nav>
                        <Notificacion />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Barranav;