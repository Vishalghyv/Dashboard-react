import React from "react";
import "./styles.css";
import {
  Card,
  Badge,
  Button,
  Breadcrumb,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Modal
} from "react-bootstrap";

import logo from "./groffery.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Header
          style={{
            padding: "25px 10px",
            fontSize: "20px",
            backgroundColor: "#d9d7d4"
          }}
        >
          Dashboard
        </Card.Header>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
            Home
          </ListGroup.Item>
          <ListGroup.Item action>Upload New Flyer</ListGroup.Item>
          <ListGroup.Item action>Analytics</ListGroup.Item>
          <ListGroup.Item action>Another</ListGroup.Item>
          <ListGroup.Item action>More setting</ListGroup.Item>
          <ListGroup.Item action variant="warning">
            LogOut
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

function Home() {
  return <div> HEllo</div>;
}

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
    </div>
  );
}
