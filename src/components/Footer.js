import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-4">
      <Container>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Anne Rayana <br></br>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
