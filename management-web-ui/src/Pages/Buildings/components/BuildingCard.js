import building from '../building.png';
import './BuildingCard.css';

const BuildingCard = (props) => {
    return (
        <div className='building-card-wrapper' onClick={props.onClick}>
            <div className='building-card'>
                <img src={building}></img>
            </div>
            <p className='building-card-name'>{props.text}</p>
        </div>
    )
}

export default BuildingCard;