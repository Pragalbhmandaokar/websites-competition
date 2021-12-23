import React, { useRef, useState, useEffect } from "react";
import "../LoginScreen/LoginScreen.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";

function Verification() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  //   const [otpCode, setOtp] = useState("");
  const submitButton = async () => {
    // e.preventDefault();
    const otpCode1 = document.getElementById("otpCode").value;
    const userCheck = JSON.parse(localStorage.getItem("userCheck"));
    var name = userCheck.name;
    var pic = userCheck.pic;
    var password = userCheck.password;
    var email = userCheck.email;
    let url = "/api/users/verify-password";
    let options = {
      method: "POST",
      url: url,
      data: {"email":email,"otpCode":otpCode1},
    };
    try {
      let response = await axios(options);
      console.log(response);
      if (response.data.statusText == "Success") {
        try {
          let config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(
            "/api/users",
            { name, pic, email, password },
            config
          );
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/login");
        } catch (error) {
          console.log(error.response.data);
        }
        
      } else {
        setMessage("Please enter Correct Mail");
        navigate("/register");
      }
    } catch (e) {}
  };
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/myinfo");
    }
  }, [navigate]);
  return (
    <MainScreen title="Reset Your Password">
      <div className="loginContainer">
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}

        <Form method="post">
          <Form.Group controlId="formBasiEmail">
            <Form.Label>OTP Code</Form.Label>
            <Form.Control
              type="nu"
              placeholder="Enter OTP"
              maxLength={4}
              id="otpCode"
            />
          </Form.Group>
          <Button variant="primary" onClick={submitButton}>
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
}

export default Verification;
