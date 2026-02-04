import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import IA from "../assets/video/IA.mp4";
import CRM from "../assets/video/CRM.mp4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "IA mock interviewer",
      description: "Entrevista técnica con IA",
      videoUrl: IA,
      githubUrl: "https://github.com/Yangsr-png/ai-interviewer",
    },
      {
      title: "CRM",
      description: "Empresa de Mantenimientos y repaciones",
      videoUrl: CRM,
      githubUrl: "https://github.com/Yangsr-png/Proyecto-CRM",
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A continuación presento una selección de mis trabajos más recientes. Desde aplicaciones web completas hasta diseños de interfaces, cada proyecto refleja mi pasión por crear soluciones digitales eficientes y atractivas</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Coming soon ...</p>
                    </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p>Coming soon ...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
