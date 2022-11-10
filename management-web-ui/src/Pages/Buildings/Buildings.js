import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import BuildingCard from './components/BuildingCard';
import MoreBuildingsCard from './components/MoreBuildingsCard';
import Modal from 'react-awesome-modal';
import './Buildings.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/Input/Input';

const Buildings = () => {

    const [visible, setVisible] = useState(false);
    const [buildingsList, setBuildingsList] = useState([]);
    const [buildingName, setBuildingName] = useState("");
    const [buildingAddress, setBuildingAddress] = useState("");

    const location = useLocation();

    useEffect(() => {
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
                    result.push(<BuildingCard key={info.name} text={info.name} building={info} />);
                });
                setBuildingsList(result);
            });
    }, [location])

    const clearForm = () => {
        setBuildingAddress("");
        setBuildingName("");
        setVisible(false);
    }

    const onAddBtnClick = (event) => {

        if (!buildingAddress && !buildingName) {
            toast.error('Please fill all fields!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }

        if (!buildingName || buildingName.length < 3 || buildingName === "null") {
            toast.error('Please provide a valid name!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }

        if (!buildingAddress || buildingAddress.length < 5 || buildingAddress === "null") {
            toast.error('Please provide a valid address!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }

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
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setBuildingsList(buildingsList.concat(
                        <BuildingCard key={buildingName} text={buildingName} building={data} />
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
        
        clearForm();
    };

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        clearForm();
        setVisible(false);
    }

    return (
        <>
            <ToastContainer />
            <div className="buildings" data-testid="buildings">
                <h2 className="buildings-header">Manage Buildings</h2>
                <div className='building-list'>
                    {buildingsList}
                    <MoreBuildingsCard text="New Building" onClick={OpenModal} />
                    <Modal visible={visible} width="400" height="330" effect="fadeInDown" onClickAway={CloseModal}>
                        <div className='building-modal'>
                            <h1 className='building-modal-title'>Add Building</h1>
                            <div className='building-modal-content'>
                                <label htmlFor="building-name">Name</label>
                                <Input id="building-name" type="text" label="Building name..." value={buildingName} on_value_changed={setBuildingName} />
                            </div>
                            <div className='building-modal-content'>
                                <label htmlFor="building-addres">Address</label>
                                <Input id="building-address" type="text" label="Building address..." value={buildingAddress} on_value_changed={setBuildingAddress} />
                            </div>
                            <div className='building-modal-buttons'>
                                <AwesomeButton type="primary" onPress={onAddBtnClick}>Add</AwesomeButton>
                                <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Buildings;