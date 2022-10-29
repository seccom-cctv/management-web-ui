import { render, screen } from '@testing-library/react';
import BuildingCard from './BuildingCard';

describe('<BuildingCard />', () => {
    test('it should mount', () => {
        render(<BuildingCard />);

        const buildingCard = screen.getByTestId('building-card');
        expect(buildingCard).toBeInTheDocument();
    });
});