import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbarr = () => {
  return (
    <>
      <Navbar bg="light shadow navbar">
        <Container>
          <Navbar.Brand className="mx-auto">
            <img
              src="https://auth.udacity.com/static/media/logo.08dc9669.svg"
              className="navbar_brand_img"
            ></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
