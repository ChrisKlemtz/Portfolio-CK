import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Hier würde normalerweise der API-Call zum Backend stehen
      // const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      // Simulation eines erfolgreichen Versands
      setTimeout(() => {
        setAlertType('success');
        setAlertMessage('Ihre Nachricht wurde erfolgreich gesendet! Ich melde mich bald bei Ihnen zurück.');
        setShowAlert(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        
        // Alert nach 5 Sekunden ausblenden
        setTimeout(() => setShowAlert(false), 5000);
      }, 1500);

    } catch (error) {
      setAlertType('danger');
      setAlertMessage('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
      setShowAlert(true);
      setIsSubmitting(false);
      
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const contactInfo = [
    {
      title: 'E-Mail',
      value: 'chris.klemtz@example.com',
      link: 'mailto:chris.klemtz@example.com',
      icon: '📧'
    },
    {
      title: 'Telefon',
      value: '+49 123 456 7890',
      link: 'tel:+491234567890',
      icon: '📱'
    },
    {
      title: 'Location',
      value: 'Deutschland',
      link: null,
      icon: '📍'
    },
    {
      title: 'GitHub',
      value: 'github.com/ChrisKlemtz',
      link: 'https://github.com/ChrisKlemtz',
      icon: '💻'
    }
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center mb-4">Kontakt</h1>
          <p className="lead text-center text-muted">
            Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!
          </p>
          <hr className="w-25 mx-auto" />
        </Col>
      </Row>

      {/* Alert */}
      {showAlert && (
        <Row className="mb-4">
          <Col>
            <Alert variant={alertType} className="text-center">
              {alertMessage}
            </Alert>
          </Col>
        </Row>
      )}

      <Row>
        {/* Contact Form */}
        <Col lg={8} className="mb-5">
          <Card className="border-0 shadow">
            <Card.Body className="p-4">
              <h3 className="mb-4">Nachricht senden</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ihr vollständiger Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>E-Mail *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ihre.email@example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Betreff *</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Worum geht es?"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Nachricht *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Laden...</span>
                        </span>
                        Wird gesendet...
                      </>
                    ) : (
                      'Nachricht senden'
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Info */}
        <Col lg={4}>
          <Card className="border-0 shadow h-100">
            <Card.Body className="p-4">
              <h3 className="mb-4">Kontaktinformationen</h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2" style={{ fontSize: '1.2rem' }}>
                      {info.icon}
                    </span>
                    <strong>{info.title}</strong>
                  </div>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-decoration-none text-muted"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-muted">{info.value}</span>
                  )}
                </div>
              ))}

              <hr className="my-4" />

              <div className="mb-4">
                <h5 className="mb-3">Verfügbarkeit</h5>
                <p className="text-muted small mb-2">
                  <strong>Antwortzeit:</strong> 24-48 Stunden
                </p>
                <p className="text-muted small mb-2">
                  <strong>Arbeitszeiten:</strong> Mo-Fr, 9:00-18:00 Uhr
                </p>
                <p className="text-muted small">
                  <strong>Zeitzone:</strong> MEZ/MESZ (UTC+1/+2)
                </p>
              </div>

              <div className="text-center">
                <h6 className="mb-3">Folgen Sie mir</h6>
                <div className="d-flex justify-content-center gap-3">
                  <a 
                    href="https://github.com/ChrisKlemtz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/chris-klemtz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">Häufig gestellte Fragen</h3>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <h6>Wie lange dauert ein typisches Projekt?</h6>
                    <p className="text-muted small">
                      Das hängt vom Umfang ab. Einfache Websites: 1-2 Wochen, 
                      komplexe Web-Apps: 4-8 Wochen.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6>Welche Technologien verwenden Sie?</h6>
                    <p className="text-muted small">
                      Hauptsächlich MERN-Stack (MongoDB, Express, React, Node.js), 
                      aber auch andere moderne Web-Technologien.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <h6>Bieten Sie auch Wartung an?</h6>
                    <p className="text-muted small">
                      Ja, ich biete langfristige Wartung und Support für alle 
                      von mir entwickelten Projekte an.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6>Arbeiten Sie remote?</h6>
                    <p className="text-muted small">
                      Ja, ich arbeite vollständig remote und bin gewohnt, 
                      mit Kunden aus ganz Deutschland zusammenzuarbeiten.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;