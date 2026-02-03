import { Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

// Recibimos githubUrl como nueva propiedad
export const ProjectCard = ({ title, description, imgUrl, videoUrl, githubUrl }) => {
  
  // Estado para controlar si el Modal (ventana grande) está abierto
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              muted 
              loop 
              onMouseOver={event => event.target.play()} 
              onMouseOut={event => event.target.pause()} 
              playsInline
            />
          ) : (
            <img src={imgUrl} alt="Project Image" />
          )}

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            
            <div className="mt-4 d-flex justify-content-center gap-2">
              <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm fw-bold">
                <i className="bi bi-github"></i> GitHub
              </a>

              <button onClick={handleShow} className="btn btn-outline-light btn-sm fw-bold">
                <i className="bi bi-arrows-fullscreen"></i> Ver Demo
              </button>
            </div>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#151515', color: 'white', borderBottom: '1px solid #333' }}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#151515', padding: 0 }}>
          {videoUrl ? (
            <video 
              src={videoUrl} 
              style={{ width: '100%', maxHeight: '80vh' }} 
              controls 
              autoPlay 
            />
          ) : (
            <img src={imgUrl} alt="Project Full" style={{ width: '100%' }} />
          )}
          <div className="p-3 text-white">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm fw-bold ">
              Código GitHub
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}