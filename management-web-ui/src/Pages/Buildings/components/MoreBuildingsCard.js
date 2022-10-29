import plus from './plus2.png';
import './MoreBuildingsCard.css';

const MoreBuildingsCard = (props) => {
    return (
        <div className='building-card-wrapper' data-testid="more-buildings-card" onClick={props.onClick}>
            <div className='building-card'>
                <img src={plus}></img>
            </div>
            <p className='building-card-name'>{props.text}</p>
        </div>
    )
}

export default MoreBuildingsCard;