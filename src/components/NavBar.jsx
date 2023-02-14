import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Guitar E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to={'/'} className="navLink">Home</Link> 
            </Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown className="navLink" title="Filter" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Guitar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bass</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Clear</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              About me
            </Nav.Link>
          </Nav>
          <Link style={{paddingRight: "10px", paddingBottom: "5px"}} className="navLink" to={'/cart'}><BsFillCartFill/></Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;