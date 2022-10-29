import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import BuildingCard from './components/BuildingCard';
import MoreBuildingsCard from './components/MoreBuildingsCard';
import Modal from 'react-awesome-modal';
import './Buildings.css';
import { useState } from 'react';

const Buildings = () => {

    const [visible, setVisible] = useState(false);
    const [buildingsList, setBuildingsList] = useState([]);
    const [buildingName, setBuildingName] = useState("");
    const [buildingNameError, setBuildingNameError] = useState(false);

    const handleBuildingName = (event) => {
        var str = event.target.value;
        setBuildingName(str);
    }

    const onAddBtnClick = event => {
        if (buildingName !== ""){
            setBuildingsList(buildingsList.concat(
                <BuildingCard key={buildingName} text={buildingName} />
            )
            );
            setVisible(false);
        } else {
            setBuildingNameError(true);
        }
    };

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        setVisible(false);
    }
    return (
        <div className="buildings">
            <h2 className="buildings-header">Manage Buildings</h2>
            <div className='building-list'>
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                <BuildingCard text="Building 3" />
                {buildingsList}
                <MoreBuildingsCard text="New Building" onClick={OpenModal} />
                <Modal visible={visible} width="400" height="280" effect="fadeInDown" onClickAway={CloseModal}>
                    <div className='building-modal'>
                        <h1 className='building-modal-title'>Add Building</h1>
                        <div className='building-modal-content'>
                            <label htmlFor="building-name">Name</label>
                            <input id='building-name' type="text" onChange={handleBuildingName} placeholder="Building name..." />
                            {buildingNameError && <p className='building-name-error'>* Building name can't be null</p>}
                        </div>
                        <div className='building-modal-buttons'>
                            <AwesomeButton type="primary" onPress={onAddBtnClick}>Add</AwesomeButton>
                            <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Buildings;