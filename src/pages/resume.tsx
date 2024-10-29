import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resume() {

    const embedLink = 'https://docs.google.com/document/d/e/2PACX-1vTBmWBpNKpaUjdJd1YKRZDfUSvIyNfT7PeVyJbrE-YLymciwq0dcbm2IWq8X5eNtNkppLSi3x1IlX7h/pub'
    return (
    <div>
        <div className='d-flex align-items-center mt-5 justify-content-center'>
            <a className='btn btn-success' href='My Resume.pdf' download="Resume.pdf">Download my resume</a>
        </div>
        <br></br>
        <div className='resume-container'>
        <iframe src={embedLink} title='resume' width='100%' height='1000px'></iframe>  
        </div>
    </div>
    );
};