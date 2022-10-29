import { render, screen } from '@testing-library/react';
import MoreBuildingsCard from './MoreBuildingsCard';

describe('<MoreBuildingsCard />', () => {
    test('it should mount', () => {
        render(<MoreBuildingsCard />);

        const moreBuildingsCard = screen.getByTestId('more-buildings-card');
        expect(moreBuildingsCard).toBeInTheDocument();
    });
});