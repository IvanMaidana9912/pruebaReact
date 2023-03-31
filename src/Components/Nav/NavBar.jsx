import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const pages = [
  {label: 'Home', id:0, link: '/' },
  {label: 'Residencial', id:1, link: '/category/residential' },
  {label: 'Comercial', id:2, link: '/category/commercial' },

]


      export default function NavBar() {
      
        return (
          <>
          <Navbar bg="black" expand="lg" className='navbar'>
            <Container>
            <Link className="navbar-brand" to={"/"}>
              <img src={"https://i.imgur.com/xDoLQBr.jpg"} alt={"logo"} className="w-50" />
            </Link>
              <Navbar.Brand href="/">
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={ {backgroundColor: 'white'} } />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  {pages.map((page)=> (
                    <Nav.Link key={page.link} as={Link} to={page.link} style={{ color: 'white'}}>
                      {page.label}
                    </Nav.Link>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </>
        )
}
