import { Container, Row ,Button} from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import {useEffect} from "react"
import "./LandingPage.css";

// import {Link} from "react-router-dom"
// import {useEffect} from "react"
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/myinfo");
    }
  }, [navigate]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to our website</h1>
              <p className="subtitle">
                Login if you have account ,otherwise Sign Up
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
