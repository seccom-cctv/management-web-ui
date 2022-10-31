import building from '../building.png';
import { Link } from 'react-router-dom';
import './BuildingCard.css';

const BuildingCard = (props) => {
    return (
        <div className='building-card-wrapper' data-testid="building-card" onClick={props.onClick}>
            <Link to={"/building"} state={{building: props.building}}>
                <div className='building-card'>
                    <img src={building} alt=""></img>
                </div>
            </Link>
            <p className='building-card-name'>{props.text}</p>
        </div>
    )
}

export default BuildingCard;