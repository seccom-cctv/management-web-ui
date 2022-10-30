import './BuildingDetails.css';
import BuildingTableRow from './components/BuildingTableRow';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const BuildingDetails = () => {
    return (
        <div className='building-details' data-testid="building-details">
            <h2 className='building-details-header'>Building Details</h2>
            <div className='building-details-content'>
                <div className='building-details-content-items'>
                    <h5>Name:</h5>
                    <p>Building 1</p>
                </div>
                <div className='building-details-content-items'>
                    <h5>Location:</h5>
                    <p>Aveiro</p>
                </div>
            </div>
            <div className='add-new-camara-button'>
            <AwesomeButton type="primary" onPress={null}>New Device</AwesomeButton>
            </div>
            <ul className="responsive-table" style={{paddingLeft: 0}}>
                <li className="table-header">
                    <div className="col col-11">Device</div>
                    <div className="col col-22">Date</div>
                    <div className="col col-33">Health</div>
                    <div className="col col-44">Logs</div>
                    <div className="col col-55">Actions</div>
                </li>
                <BuildingTableRow device="Camera" date="29/10/2022" health="10%" />
                <BuildingTableRow device="Alarm" date="29/10/2022" health="45%" />
            </ul>
        </div>
    )
}

export default BuildingDetails;