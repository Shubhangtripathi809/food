import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoc from "../Comps/logoc.png"; // Import your logo file

function Navbarmenu() {
  return (
    <>
      <Navbar className="bg-transparent" variant="">
        <Container>
          <Navbar.Brand href="">
            <img
              src={logoc}
              height="120"
              className="d-inline-block align-top"
              alt="Your logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmenu;
