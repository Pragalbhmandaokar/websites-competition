import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
const Header = () => {
  let name;
  const navigate = useNavigate()
  // const name = localStorage.getItem('userInfo').name;
  if(localStorage.getItem('userInfo')){
      name = JSON.parse(localStorage.getItem("userInfo")).name;
  }else{
    name="User"
  }

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/myinfo">My Information</Link>
            </Nav.Link>
            <NavDropdown title={name} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                localStorage.removeItem("userInfo");navigate('/')
              }}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
