import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Statische Projekte (später durch API-Calls ersetzt)
  const staticProjects = [
    {
      _id: '1',
      title: 'MERN Portfolio Website',
      description: 'Eine vollständige Portfolio-Website mit React, Node.js, Express und MongoDB. Features: Responsive Design, Admin-Panel, Kontaktformular und Projektmanagement.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
      githubUrl: 'https://github.com/ChrisKlemtz/Portfolio-CK',
      liveUrl: 'https://chrisklemtz-portfolio.netlify.app',
      imageUrl: 'https://via.placeholder.com/400x250/667eea/ffffff?text=MERN+Portfolio',
      featured: true
    },
    {
      _id: '2',
      title: 'E-Commerce Shop',
      description: 'Ein moderner Online-Shop mit Warenkorb, Benutzerauthentifizierung und Zahlungsintegration. Vollständig responsive und SEO-optimiert.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com/ChrisKlemtz/ecommerce-shop',
      liveUrl: '#',
      imageUrl: 'https://via.placeholder.com/400x250/28a745/ffffff?text=E-Commerce',
      featured: true
    },
    {
      _id: '3',
      title: 'Task Management App',
      description: 'Eine Projektmanagement-Anwendung mit Drag-and-Drop-Funktion, Team-Kollaboration und Echtzeit-Updates.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/ChrisKlemtz/task-manager',
      liveUrl: '#',
      imageUrl: 'https://via.placeholder.com/400x250/ffc107/000000?text=Task+Manager',
      featured: false
    },
    {
      _id: '4',
      title: 'Weather Dashboard',
      description: 'Ein interaktives Wetter-Dashboard mit Standortsuche, 5-Tage-Vorhersage und schönen Animationen.',
      technologies: ['React', 'Weather API', 'Chart.js', 'Bootstrap'],
      githubUrl: 'https://github.com/ChrisKlemtz/weather-dashboard',
      liveUrl: '#',
      imageUrl: 'https://via.placeholder.com/400x250/17a2b8/ffffff?text=Weather+App',
      featured: false
    },
    {
      _id: '5',
      title: 'Blog CMS',
      description: 'Ein Content-Management-System für Blogs mit Rich-Text-Editor, Kategorien und Kommentarfunktion.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      githubUrl: 'https://github.com/ChrisKlemtz/blog-cms',
      liveUrl: '#',
      imageUrl: 'https://via.placeholder.com/400x250/6f42c1/ffffff?text=Blog+CMS',
      featured: false
    },
    {
      _id: '6',
      title: 'Chat Application',
      description: 'Eine Echtzeit-Chat-Anwendung mit Gruppenräumen, Dateifreigabe und Benutzerauthentifizierung.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/ChrisKlemtz/chat-app',
      liveUrl: '#',
      imageUrl: 'https://via.placeholder.com/400x250/dc3545/ffffff?text=Chat+App',
      featured: false
    }
  ];

  useEffect(() => {
    // Simulation eines API-Calls
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Hier würde normalerweise der API-Call stehen:
        // const response = await axios.get('http://localhost:5000/api/projects');
        // setProjects(response.data);
        
        // Simulation mit setTimeout
        setTimeout(() => {
          setProjects(staticProjects);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Fehler beim Laden der Projekte');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Laden...</span>
          </div>
          <p className="mt-3">Projekte werden geladen...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center mb-4">Meine Projekte</h1>
          <p className="lead text-center text-muted">
            Hier findest du eine Auswahl meiner aktuellen Web-Entwicklungsprojekte
          </p>
          <hr className="w-25 mx-auto" />
        </Col>
      </Row>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center mb-4">
                <Badge bg="primary" className="fs-5">Featured Projects</Badge>
              </h2>
            </Col>
          </Row>
          <Row className="mb-5">
            {featuredProjects.map((project) => (
              <Col lg={6} key={project._id} className="mb-4">
                <Card className="project-card h-100 border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} bg="secondary" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Card.Title className="h4">{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="d-flex gap-2 mt-auto">
                      <Button 
                        variant="primary" 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-fill"
                      >
                        GitHub
                      </Button>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <Button 
                          variant="success" 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-fill"
                        >
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <Row className="mb-4">
            <Col>
              <h2 className="text-center mb-4">Weitere Projekte</h2>
            </Col>
          </Row>
          <Row>
            {otherProjects.map((project) => (
              <Col lg={4} md={6} key={project._id} className="mb-4">
                <Card className="project-card h-100 border-0 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} bg="outline-secondary" className="me-1 mb-1 tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Card.Title className="h5">{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1 small">
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description}
                    </Card.Text>
                    <div className="d-flex gap-2 mt-auto">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-fill"
                      >
                        GitHub
                      </Button>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <Button 
                          variant="outline-success" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-fill"
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Call to Action */}
      <Row className="mt-5">
        <Col className="text-center">
          <Card className="bg-light border-0">
            <Card.Body className="py-5">
              <h3 className="mb-3">Interesse an einer Zusammenarbeit?</h3>
              <p className="lead mb-4">
                Ich bin immer offen für spannende neue Projekte und Herausforderungen!
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Kontakt aufnehmen
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;