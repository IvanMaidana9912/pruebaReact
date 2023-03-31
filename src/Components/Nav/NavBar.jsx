import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="black" expand="lg" >
                <Container className='navbar d-flex flex-nowrap'>
                    <Link className="navbar-brand" to={"/"}>
                        <img src={"https://i.imgur.com/xDoLQBr.jpg"} alt={"logo"} className="w-50" id="imageNav" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navToggle' />
                </Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link key={'/category/residential'} as={Link} to={'/categoria/residencial'} className='navColorLetter'>
                            {'Residencial'}
                        </Nav.Link>
                        <Nav.Link key={'/category/commercial'} as={Link} to={'/categoria/comercial'} className='navColorLetter'>
                            {'Comercial'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
