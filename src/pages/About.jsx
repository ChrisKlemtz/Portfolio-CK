import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Express.js', level: 75 },
    { name: 'Git/GitHub', level: 85 }
  ];

  const experience = [
    {
      title: 'Web Development Journey',
      period: '2023 - Heute',
      description: 'Intensive Beschäftigung mit modernen Web-Technologien und Full-Stack Development'
    },
    {
      title: 'MERN Stack Spezialisierung',
      period: '2024',
      description: 'Fokus auf MongoDB, Express.js, React und Node.js für vollständige Web-Anwendungen'
    },
    {
      title: 'Portfolio-Projekte',
      period: '2024',
      description: 'Entwicklung verschiedener Projekte zur Demonstration meiner Fähigkeiten'
    }
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center mb-4">Über mich</h1>
          <hr className="w-25 mx-auto" />
        </Col>
      </Row>

      {/* Personal Info */}
      <Row className="mb-5">
        <Col lg={6}>
          <Card className="h-100 border-0 shadow">
            <Card.Body className="p-4">
              <h3 className="mb-4">Meine Geschichte</h3>
              <p className="lead mb-3">
                Hallo! Ich bin Chris Klemtz, ein leidenschaftlicher Web Developer aus Deutschland.
              </p>
              <p>
                Meine Reise in die Welt der Webentwicklung begann mit der Neugier, wie Websites 
                funktionieren. Schnell entwickelte sich daraus eine Leidenschaft für das Erstellen 
                moderner, benutzerfreundlicher Webanwendungen.
              </p>
              <p>
                Ich spezialisiere mich auf den MERN-Stack (MongoDB, Express.js, React, Node.js) 
                und liebe es, komplexe Probleme in elegante, funktionale Lösungen zu verwandeln.
              </p>
              <p className="mb-0">
                Wenn ich nicht gerade Code schreibe, beschäftige ich mich mit neuen Technologien, 
                lese Tech-Blogs oder arbeite an persönlichen Projekten.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={6}>
          <Card className="h-100 border-0 shadow">
            <Card.Body className="p-4">
              <h3 className="mb-4">Was ich mitbringe</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>🚀 Moderne Technologien:</strong><br />
                  React, Node.js, MongoDB, Express.js
                </li>
                <li className="mb-3">
                  <strong>💡 Problemlösungskompetenz:</strong><br />
                  Analytisches Denken und kreative Lösungsansätze
                </li>
                <li className="mb-3">
                  <strong>📱 Responsive Design:</strong><br />
                  Mobile-first Entwicklung mit Bootstrap
                </li>
                <li className="mb-3">
                  <strong>⚡ Performance:</strong><br />
                  Optimierte und schnelle Webanwendungen
                </li>
                <li className="mb-0">
                  <strong>🔄 Continuous Learning:</strong><br />
                  Ständige Weiterbildung und Anpassung an neue Trends
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Skills */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4">Meine Fähigkeiten</h3>
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  variant="primary" 
                  style={{ height: '8px' }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Experience Timeline */}
      <Row>
        <Col>
          <h3 className="text-center mb-4">Mein Werdegang</h3>
          <Row>
            {experience.map((exp, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
                         style={{width: '50px', height: '50px'}}>
                      {index + 1}
                    </div>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{exp.period}</Card.Subtitle>
                    <Card.Text>{exp.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;