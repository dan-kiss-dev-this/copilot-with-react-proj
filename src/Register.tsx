import React, { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ username });
    };

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username or Email:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}