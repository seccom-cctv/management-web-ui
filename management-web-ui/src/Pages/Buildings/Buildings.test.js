import { render, screen } from '@testing-library/react';
import Buildings from './Buildings';

describe('<Buildings />', () => {
    test('it should mount', () => {
        render(<Buildings />);

        const buildings = screen.getByTestId('buildings');
        expect(buildings).toBeInTheDocument();
    });
});