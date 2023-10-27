import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "../assets/logo.svg";

const NavbarPrincipal = () => {
  return (
    <Container fluid className="p-0">
      <Navbar id="Nav">
        <Navbar.Brand>
          <img src={logo} alt="logo" width={250} />
        </Navbar.Brand>
        <Nav.Link className="text-light mx-2">Home</Nav.Link>
        <Nav.Link className="text-light mx-2">Serie TV</Nav.Link>
        <Nav.Link className="text-light mx-2">My List</Nav.Link>
      </Navbar>
    </Container>
  );
};

export default NavbarPrincipal;
