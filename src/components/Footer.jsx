import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Chris Klemtz</h5>
            <p className="mb-0">Full-Stack Web Developer</p>
            <small className="text-muted">
              Leidenschaftlich entwickelt mit React & Node.js
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="mb-2">
              <a 
                href="https://github.com/ChrisKlemtz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none me-3"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/chris-klemtz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none me-3"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:chris.klemtz@example.com"
                className="text-white text-decoration-none"
              >
                E-Mail
              </a>
            </div>
            <small className="text-muted">
              © {currentYear} Chris Klemtz. Alle Rechte vorbehalten.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;