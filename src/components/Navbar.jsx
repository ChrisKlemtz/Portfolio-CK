import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong>Chris Klemtz</strong>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Über mich</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projekte</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Kontakt</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;