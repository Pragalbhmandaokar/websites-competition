import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import PasswordForm from "./PasswordForm";

function OtpForm() {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [toggle, toggleForm] = useState(true);
  const sendOtp = async () => {
    try {
    let url = "/api/users/email-send";
      let options = {
        method: "POST",
        url: url,
        data: { email: emailRef.current.value },
      };
      let response = await axios(options);
      let record = response.data;
      if (record.statusText == "Success") {
        //   localStorage.setItem('token',response.data.token)
        //   setTimeout(() => {
        //     navigate('/')
        //   },1500)
        console.log(toggle);
        toggleForm(false);
        // console.log(toggle);
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.log(toggle);
      console.log(e.message);
    }
  };

  return (
    <MainScreen title="Reset Your Password">
      <div className="loginContainer">
          {toggle ? <Form method="post">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>
            <Button variant="primary" onClick={sendOtp}>
              Send OTP
            </Button>
            <Link to="/login">
              <Button variant="primary" type="button" className="ml-3">
                Back
              </Button>
            </Link>
          </Form> : <PasswordForm email={emailRef.current.value}/>}
      </div>
    </MainScreen>
  );
}

export default OtpForm;
