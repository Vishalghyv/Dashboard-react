import React from "react";
import "./styles.css";
import {
  Badge,
  Button,
  Breadcrumb,
  Form,
  FormControl,
  ListGroup,
  ListGroupItem,
  Modal
} from "react-bootstrap";

function SideBar() {
  return (
    <div className="sidebar">
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
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
