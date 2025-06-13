import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
  const featuredSkills = [
    { name: 'React', level: 'Fortgeschritten', color: '#61DAFB' },
    { name: 'Node.js', level: 'Fortgeschritten', color: '#339933' },
    { name: 'MongoDB', level: 'Intermediate', color: '#47A248' },
    { name: 'JavaScript', level: 'Fortgeschritten', color: '#F7DF1E' },
    { name: 'Bootstrap', level: 'Fortgeschritten', color: '#7952B3' },
    { name: 'Express.js', level: 'Intermediate', color: '#000000' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="hero-content">
              <h1 className="display-4 fw-bold mb-4">
                Hallo, ich bin <span className="text-warning">Chris Klemtz</span>
              </h1>
              <p className="lead mb-4">
                Full-Stack Web Developer mit Leidenschaft für moderne Technologien 
                und benutzerfreundliche Anwendungen
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <LinkContainer to="/projects">
                  <Button variant="warning" size="lg" className="px-4">
                    Meine Projekte
                  </Button>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Button variant="outline-light" size="lg" className="px-4">
                    Kontakt aufnehmen
                  </Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-5">Meine Technologien</h2>
            </Col>
          </Row>
          <Row>
            {featuredSkills.map((skill, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <Card className="h-100 text-center border-0 shadow-sm">
                  <Card.Body>
                    <div 
                      className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: skill.color,
                        color: skill.color === '#F7DF1E' || skill.color === '#47A248' ? '#000' : '#fff'
                      }}
                    >
                      <strong>{skill.name.charAt(0)}</strong>
                    </div>
                    <Card.Title>{skill.name}</Card.Title>
                    <Card.Text className="text-muted">{skill.level}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h3 className="mb-4">Bereit für Ihr nächstes Projekt?</h3>
              <p className="lead mb-4">
                Lassen Sie uns zusammenarbeiten und etwas Großartiges erschaffen!
              </p>
              <LinkContainer to="/contact">
                <Button variant="warning" size="lg">
                  Jetzt Kontakt aufnehmen
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;