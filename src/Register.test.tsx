import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Register from './Register';
import '@testing-library/jest-dom';

// filepath: /Users/danielkiss/Code/copilot-with-react-proj/src/Register.test.tsx

describe('Register Component', () => {
    it('renders the Register component', () => {
        render(<Register />);
        expect(screen.getByText('Register Page')).toBeInTheDocument();
    });

    it('displays an error message for invalid email', () => {
        render(<Register />);
        const emailInput = screen.getByLabelText('Email:');
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.blur(emailInput);
        expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });

    it('does not display an error message for valid email', () => {
        render(<Register />);
        const emailInput = screen.getByLabelText('Email:');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.blur(emailInput);
        expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
    });

    it('calls handleSubmit on form submission', () => {
        render(<Register />);
        const emailInput = screen.getByLabelText('Email:');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
    });
});