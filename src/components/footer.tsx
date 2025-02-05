import '../styles/footer.css';
import { useEffect, useState } from 'react';
import ContactField from './contactField';

const Footer = () => {

    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        setShowContact(false);
    }, [])

    return (
        <footer>
            <p>© 2024 Christopher Persaud-Cox</p>
            <button className="btn btn-primary" onClick={() => setShowContact(!showContact)}>Contact Me</button>

            {showContact && <ContactField />}
        </footer>
    );
};

export default Footer;