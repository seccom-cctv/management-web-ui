import { VideoIcon } from "@primer/octicons-react"; // custom icons
import { AwesomeButton } from 'react-awesome-button';

const IntrusionListItem = (props) => {
    return (
        <li className="table-row" data-testid="building-table-row">
            <div className="col col-11" data-label="id">{props.id}</div>
            <div className="col col-22" data-label="date">{props.date}</div>
            <div className="col col-33" data-label="type">{props.type}</div>
            <div className="col col-44 col-icon" data-label="Logs">
                <AwesomeButton type="primary" onPress={null}><VideoIcon /></AwesomeButton>
            </div>
        </li>
    )
}

export default IntrusionListItem;