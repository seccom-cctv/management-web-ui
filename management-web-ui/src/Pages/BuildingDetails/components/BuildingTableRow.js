import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import '../BuildingDetails.css';

const BuildingTableRow = (props) => {
    return (
        <li className="table-row" data-testid="buildingtableRow">
            <div className="col col-11" data-label="Device">{props.device}</div>
            <div className="col col-22" data-label="Date">{props.date}</div>
            <div className="col col-33" data-label="Health">{props.health}</div>
            <div className="col col-44 col-icon" data-label="Logs"><FontAwesomeIcon icon={faEye} /></div>
            <div className="col col-55 col-icon" data-label="Logs">
                <AwesomeButton type="primary" onPress={null}>Edit</AwesomeButton>
                <AwesomeButton style={{marginLeft: '1rem'}} type="danger" onPress={null}>Delete</AwesomeButton>
            </div>
        </li>
    )
}

export default BuildingTableRow;