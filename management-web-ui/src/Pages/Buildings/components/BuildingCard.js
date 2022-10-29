import building from '../building.png';
import './BuildingCard.css';

const BuildingCard = (props) => {
    return (
        <div className='building-card-wrapper' data-testid="building-card" onClick={props.onClick}>
            <div className='building-card'>
                <img src={building} alt=""></img>
            </div>
            <p className='building-card-name'>{props.text}</p>
        </div>
    )
}

export default BuildingCard;