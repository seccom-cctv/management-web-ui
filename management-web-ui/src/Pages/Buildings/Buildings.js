import { Row, Col } from 'react-bootstrap';
import './Buildings.css';
import BuildingCard from './components/BuildingCard';
import MoreBuildingsCard from './components/MoreBuildingsCard';

const Buildings = () => {
    return (
        <div className="buildings">
            <h2 className="buildings-header">Manage Buildings</h2>
            <div className='building-list'>
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <MoreBuildingsCard text="New Building" />
            </div>
        </div>
    )
}

export default Buildings;