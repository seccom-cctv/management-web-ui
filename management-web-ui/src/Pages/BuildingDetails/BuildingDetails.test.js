import { render, screen } from '@testing-library/react';
import BuildingDetails from './BuildingDetails';

describe('<BuildingDetails />', () => {
    test('it should mount', () => {
        render(<BuildingDetails />);

        const buildingDetails = screen.getByTestId('building-details');
        expect(buildingDetails).toBeInTheDocument();
    });
});