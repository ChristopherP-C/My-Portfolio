import { useState } from "react";
import validateEmail from "../utils/helper.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name: inputType, value: inputValue } = e.target;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please provide a valid email address');
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
        setErrorMessage('Message sent, thank you!');
    };

    return (
        <div className="container">
            <h1 className="mb-5">Please feel free to contact me!</h1>
            <section>
                <form className="container" onSubmit={handleFormSubmit}>
                    <div  className="form-floating mb-3">
                    <input
                    className="form-control"
                    id="floatingName"
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                    />
                    <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input
                    className="form-control"
                    id="floatingEmail"
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                    />
                    <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                    <textarea
                    className="form-control"
                    id="floatingMessage"
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    placeholder='Message'
                    />
                    <label htmlFor="floatingMessage">Message</label>
                    </div >
                    <div className="d-grid gap-2 col-3 mx-auto mb-3">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger d-grid gap-2 col-3 mx-auto mb-3">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    </form>
            </section>
        </div>
    );
};