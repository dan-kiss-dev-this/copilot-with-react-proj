import React, { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log({ email }, validateEmail(email));
        } else {
            console.log('Invalid email address');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!validateEmail(newEmail)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    // add validation to setEmail

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleSubmit} role="form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}