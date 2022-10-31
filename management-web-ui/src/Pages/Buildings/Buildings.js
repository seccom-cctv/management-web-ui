import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import BuildingCard from './components/BuildingCard';
import MoreBuildingsCard from './components/MoreBuildingsCard';
import Modal from 'react-awesome-modal';
import './Buildings.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buildings = () => {

    const [visible, setVisible] = useState(false);
    const [buildingsList, setBuildingsList] = useState([]);
    const [buildingName, setBuildingName] = useState("");
    const [buildingAddress, setBuildingAddress] = useState("");
    const [buildingNameError, setBuildingNameError] = useState(false);
    const [buildingAddressError, setBuildingAddressError] = useState(false);

    useEffect(() => {
        const location = useLocation();
        // get of company buildings from id
        let result = [];
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/building/?company_id=' + location.state.company[0].id, requestOptions)
            .then(response => response.json())
            .then(data => {
                data.forEach((info) => {
                    result.push(<BuildingCard key={info.name} text={info.name} building={info}/>);
                });
                setBuildingsList(result);
            });
    }, [])

    const onAddBtnClick = (event) => {
        if (buildingName !== "" && buildingAddress!==""){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: buildingName,
                    address: buildingAddress,
                    company_id: location.state.company[0].id
                })
            };
            fetch('http://localhost:8082/v1/building/', requestOptions)
                .then(response => {
                    response.json();
                    if (parseInt(response.status) === 200) {
                        setBuildingsList(buildingsList.concat(
                            <BuildingCard key={buildingName} text={buildingName} />
                        )
                        );
                        toast.info('New Building Created !', {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2000
                        });
                    } else {
                        toast.error('Something went wrong !', {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2000
                        });
                    }
                })
            setVisible(false);
        } else if (buildingName === "")
            setBuildingNameError(true);
        else
            setBuildingAddressError(true);
    };

    const handleBuildingNameChange = (event) => {
        var str = event.target.value;
        setBuildingName(str);
    }

    const handleBuildingAddressChange = (event) => {
        var str = event.target.value;
        setBuildingAddress(str);
    }

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        setBuildingNameError(false);
        setBuildingAddressError(false);
        setVisible(false);
    }

    return (
        <div className="buildings" data-testid="buildings">
            <h2 className="buildings-header">Manage Buildings</h2>
            <div className='building-list'>
                <BuildingCard text="Building 3"/>
                {buildingsList}
                <MoreBuildingsCard text="New Building" onClick={OpenModal} />
                <Modal visible={visible} width="400" height="330" effect="fadeInDown" onClickAway={CloseModal}>
                    <div className='building-modal'>
                        <h1 className='building-modal-title'>Add Building</h1>
                        <div className='building-modal-content'>
                            <label htmlFor="building-name">Name</label>
                            <input id='building-name' type="text" onChange={handleBuildingNameChange} placeholder="Building name..." />
                            {buildingNameError && <p className='building-name-error'>* Building name can't be null</p>}
                        </div>
                        <div className='building-modal-content'>
                            <label htmlFor="building-addres">Address</label>
                            <input id='building-address' type="text" onChange={handleBuildingAddressChange} placeholder="Building address..." />
                            {buildingAddressError && <p className='building-name-error'>* Building address can't be null</p>}
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