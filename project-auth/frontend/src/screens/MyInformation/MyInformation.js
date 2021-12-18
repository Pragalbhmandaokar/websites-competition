import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, Badge, Accordion } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
// import info from "../../data/info";
import axios from "axios";
function MyInformation() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      //   dispatch(deleteNoteAction(id));
    }
  };
  const fetchInfo = async () => {
    const { data } = await axios.get("/api/info");
    setInfo(data);
  };
  console.log(info);
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
    fetchInfo();
  }, []);
  let name;
  const userInfo = localStorage.getItem("userInfo");
    if (localStorage.getItem("userInfo")) {
      name = JSON.parse(localStorage.getItem("userInfo")).name;
    } else {
      name = "User";
    }

  return (
    <MainScreen title={`Welcome Back ${name}....`}>
      {info.map((inf) => (
        <Accordion key={inf._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {inf.title}
                </Accordion.Toggle>
              </span>
              <Button href={`/info/${inf._id}`}>Edit</Button>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {inf.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{inf.content}</p>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyInformation;
