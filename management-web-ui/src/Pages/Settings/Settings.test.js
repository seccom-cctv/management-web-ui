import { render, screen } from '@testing-library/react';
import Settings from './Settings';

describe('<Settings />', () => {
    test('it should mount', () => {
        render(<Settings />);

        const app = screen.getByTestId('settings');
        expect(app).toBeInTheDocument();
    });
});