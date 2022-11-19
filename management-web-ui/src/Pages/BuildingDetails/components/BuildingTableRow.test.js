import { render, screen } from '@testing-library/react';
import BuildingTableRow from './BuildingTableRow';

describe('<BuildingTableRow />', () => {
    test('it should mount', () => {
        render(<BuildingTableRow />);

        const buildingTableRow = screen.getByTestId('building-table-row');
        expect(buildingTableRow).toBeInTheDocument();
    });
});