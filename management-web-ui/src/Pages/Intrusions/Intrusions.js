import './Intrusions.css';
import IntrusionListItem from './components/IntrusionListItem';

const Intrusions = (props) => {
    return (
        <div className='intrusions-section'>
            <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                <li className="table-header">
                    <div className="col col-11">ID</div>
                    <div className="col col-22">Date</div>
                    <div className="col col-33">Type</div>
                    <div className="col col-44">View</div>
                </li>
                <IntrusionListItem id={1} date="18/02/2022" type="Type1" />
                <IntrusionListItem id={2} date="12/07/2022" type="Type2" />
                <IntrusionListItem id={3} date="21/06/2022" type="Type3" />
                <IntrusionListItem id={4} date="05/05/2022" type="Type4" />
            </ul>
        </div>
    )
}

export default Intrusions;