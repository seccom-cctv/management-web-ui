import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('<Navbar />', () => {
    test('it should mount', () => {

        if (localStorage.hasOwnProperty('token')) {
            render(<Navbar/>);

            const navbar = screen.getByTestId('Navbar');
            expect(navbar).toBeInTheDocument();
        }
    });
});