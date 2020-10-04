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
import analytics from "./analytics.png";
import upload from "./upload.jpg";
import back from "./back.jpg";
import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";

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

function BasicNumber({ number, content }) {
  return (
    <Card border="primary" className="BasicNumber">
      <Card.Body>
        <Card.Title
          style={{ color: "#007bff", fontWeight: "bold", fontSize: "25px" }}
        >
          {number}
        </Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function BiggerCard({ image, content }) {
  return (
    <Card
      bg="dark"
      text="white"
      style={{ width: "20rem", height: "20rem", margin: "1rem" }}
    >
      <Card.Img variant="top" src={image} height="73%" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ImageCard({ image }) {
  return (
    <Card
      bg="dark"
      text="white"
      style={{ width: "100%", margin: "1rem 0", height: "15rem" }}
    >
      <Card.Img variant="top" src={image} height="100%" />
    </Card>
  );
}

function LongCard({ image1, image2 }) {
  return (
    <Card>
      <Card.Header as="h5">Recent Uploads</Card.Header>

      <ImageCard image={image1} />
      <ImageCard image={image2} />
    </Card>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="heading">Welcome, UserName</div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ display: "flex" }}>
            <BasicNumber number="100" content="Total Click" />
            <BasicNumber number="150" content="Reshares" />
            <BasicNumber number="350" content="Flyers Saved" />
          </div>
          <div style={{ display: "flex" }}>
            <BiggerCard image={analytics} content="Analytics" />
            <BiggerCard image={upload} content="Upload New flyer" />
          </div>
        </div>
        <LongCard image1={image1} image2={logo} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div class="bg-image" style={{ backgroundImage: `url(${back})` }}></div>
      <SideBar />
      <Home />
    </div>
  );
}
