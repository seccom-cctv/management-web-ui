import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
    test('it should mount', () => {
        render(<Home />);

        const app = screen.getByTestId('home');
        expect(app).toBeInTheDocument();
    });
});