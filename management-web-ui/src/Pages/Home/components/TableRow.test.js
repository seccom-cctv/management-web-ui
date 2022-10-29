import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('<TableRow />', () => {
    test('it should mount', () => {
        render(<TableRow />);

        const tableRow = screen.getByTestId('tableRow');
        expect(tableRow).toBeInTheDocument();
    });
});