import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AwesomeButton } from 'react-awesome-button';
import { PencilIcon, TrashIcon } from "@primer/octicons-react"; // custom icons
import 'react-awesome-button/dist/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../BuildingDetails.css';

const BuildingTableRow = (props) => {
    return (
        <li className="table-row" data-testid="building-table-row">
            <div className="col col-11" data-label="Device">{props.device}</div>
            <div className="col col-22" data-label="Date">{props.date}</div>
            <div className="col col-33" data-label="Health">{props.health}</div>
            <div className="col col-44 col-icon" data-label="Logs"><FontAwesomeIcon icon={faEye} /></div>
            <div className="col col-55 col-icon" data-label="Actions">
                <AwesomeButton type="primary" onPress={null}><PencilIcon /></AwesomeButton>
                <AwesomeButton style={{marginLeft: '1rem'}} type="danger" onPress={props.onClick}><TrashIcon /></AwesomeButton>
                <ToastContainer />
            </div>
        </li>
    )
}

export default BuildingTableRow;