import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ResumeModal(props: any) {
    return (

    <section>

        <div>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <a href='My Resume.pdf' download="Resume.pdf">Download my resume</a> 
        </Modal.Header>
        <Modal.Body>
          <div>
          <img src='\assets\resume.png' alt='resume-image' />
          </div>
        </Modal.Body>
        </Modal>
        </div>

    </section>
    );
}