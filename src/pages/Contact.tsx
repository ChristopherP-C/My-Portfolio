import { useState } from "react";
import validateEmail from "../utils/helper.ts";

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
        <div>
            <h1>Please feel free to contact me!</h1>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                    />
                    <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                    />
                    <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    placeholder='Message'
                    />
                    <button type='submit'>Submit</button>
                    </form>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
            </section>
        </div>
    );
};