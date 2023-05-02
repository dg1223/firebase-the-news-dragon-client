import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaBeer,
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
import bg1 from "../../../assets/bg1.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub />
        Login with GitHub
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div></div>
    </div>
  );
};

export default RightNav;
