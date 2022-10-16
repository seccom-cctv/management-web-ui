import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
    test('it should mount', () => {
        render(<Footer />);

        const app = screen.getByTestId('footer');
        expect(app).toBeInTheDocument();
    });
});