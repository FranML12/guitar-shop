import Nav from 'react-bootstrap/Nav';

//Apply routing (Home, Stock, Cart, etc.)

const NavBar = () => {
  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Stock</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Cart</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Account
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default NavBar