import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const TableRow = (props) => {
    return (
        <li className="table-row" data-testid="tableRow">
            <div className="col col-1" data-label="Company">{props.company}</div>
            <div className="col col-3" data-label="Address">{props.address}</div>
            <div className="col col-2" data-label="Buildings">{props.buildings}</div>
            <div className="col col-4" data-label="Cameras">{props.cameras}</div>
            <div className="col col-5" data-label="Users">{props.users}</div>
            <div className="col col-6 col-icon" data-label="Details"><FontAwesomeIcon icon={faExternalLinkAlt} onClick={props.onClick}/></div>
        </li>
    )
}

export default TableRow;