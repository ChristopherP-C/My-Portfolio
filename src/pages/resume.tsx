import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';

export default function Resume() {

    
    return (
    <div>
        <div className='d-flex align-items-center mt-5 justify-content-center'>
            <a className='btn btn-success' href='My Resume.pdf' download="Resume.pdf">Download my resume</a>
        </div>
        <br />
        <section className='resume-box'>
        <div className='resume-container'>
        <img className='resume-image' src='src\assets\resume.png' alt='resume-image' />
        </div>
        </section>
    </div>
    );
};