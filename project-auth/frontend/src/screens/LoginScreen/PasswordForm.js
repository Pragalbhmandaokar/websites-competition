import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";

function PasswordForm(props) {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    otpCode: "",
    password: "",
    cpassword: "",
  });
  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const submitButton = async () => {
    if (inputField.password == inputField.cpassword) {
      Object.assign(inputField,props);
      let url = "/api/users/change-password";
      let options = {
        method: "POST",
        url: url,
        data: inputField,
      };
      try {
        let response = await axios(options);
        console.log(response)
        if (response.data.statusText == "Success") {
        //   console.log(record.message);
          navigate("/login");
          console.log(response.data.message)
        } else {
            console.log(response.data.message)
          console.log("Error");
        }
      } catch (e) {
        console.log(e.message);
      }
    }else{
        setMessage('Please enter correct password!')
    }
  };

  return (
    <div className="loginContainer">
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      <Form method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>OTP Code</Form.Label>
          <Form.Control
            type="nu"
            placeholder="Enter OTP"
            maxLength={4}
            name="otpCode"
            value={inputField.otpCode}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={inputField.password}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            value={inputField.cpassword}
            onChange={inputHandler}
          />
        </Form.Group>

        <Button variant="primary" onClick={submitButton}>
          Change Password
        </Button>
        <Link to="/login">
          <Button variant="primary" type="button" className="ml-3">
            Back
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default PasswordForm;
