import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TableRow = (props) => {
    return (
        <Link to={"/companies"} state={{id: props.id}} style={{textDecoration:"none", color:"black"}} >
            <li className="table-row" data-testid="tableRow">
                <div className="col col-1" data-label="Company">{props.company}</div>
                <div className="col col-3" data-label="Address">{props.address}</div>
                <div className="col col-2" data-label="Buildings">{props.buildings}</div>
                <div className="col col-4" data-label="Cameras">{props.cameras}</div>
                <div className="col col-5" data-label="Users">{props.users}</div>
                <div className="col col-6 col-icon" data-label="Details"><FontAwesomeIcon icon={faExternalLinkAlt} onClick={props.onClick}/></div>
            </li>
        </Link>
    )
}

export default TableRow;