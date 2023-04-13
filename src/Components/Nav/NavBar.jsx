import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return (
        <>
        <div className='nav-container'>
            <Navbar bg="black" expand="lg" >
                <Container className='navbar d-flex flex-nowrap'>
                    <Link className="navbar-brand" to={"/"}>
                        <img src={"https://i.imgur.com/xDoLQBr.jpg"} alt={"logo"} className="w-50" id="imageNav" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navToggle' />
                </Container>
                <Navbar.Collapse id="basic-navbar-nav"  style={{ justifyContent: 'flex-end'}} >
                    <Nav className='me-2' style={{alignItems: 'center'}}>
                        <Nav.Link key={'/category/residential'} as={Link} to={'/categoria/residencial'} className='navColorLetter'>
                            {'Residencial'}
                        </Nav.Link>
                        <Nav.Link key={'/category/commercial'} as={Link} to={'/categoria/comercial'} className='navColorLetter'>
                            {'Comercial'}
                        </Nav.Link>
                        <Nav.Link key={'/category/services'} as={Link} to={'/categoria/services'} className='navColorLetter'>
                            {'Servicios'}
                        </Nav.Link>
                        <Nav.Link key={'/category/trabajos'} as={Link} to={'/categoria/trabajos'} className='navColorLetter'>
                            {'Trabajos'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </>
    )
}
