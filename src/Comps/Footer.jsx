import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <div className="text-center">
          <p>&copy; 2024 Your Company</p>
          <p>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
