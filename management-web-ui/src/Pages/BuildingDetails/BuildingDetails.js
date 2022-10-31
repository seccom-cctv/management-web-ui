import './BuildingDetails.css';
import BuildingTableRow from './components/BuildingTableRow';
import { AwesomeButton } from 'react-awesome-button';
import Modal from 'react-awesome-modal';
import 'react-awesome-button/dist/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BuildingDetails = () => {
    const [visible, setVisible] = useState(false);
    const [deviceType, setDeviceType] = useState("camera");
    //const [deviceAddress, setDeviceAddress] = useState("");
    const [devicesList, setDeviceList] = useState(null);
    const [building, setBuilding] = useState(null);

    const location = useLocation();

    useEffect(() => {

        let result = [];
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/device/?building_id=' + location.state.building.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                data.forEach((info) => {
                    result.push(<BuildingTableRow key={info.id} device={info.name} date="29/10/2022" health="10%" onClick={showToastMessage}/>);
                });
                setDeviceList(result);
            });
        setBuilding(location.state.building);
    }, [location])

    const handleDeviceType = (newDevice) => {
        setDeviceType(newDevice);
    }

    // const handleDeviceAddress = (event) => {
    //     var str = event.target.value;
    //     setDeviceAddress(str);
    // }

    const showToastMessage = () => {
        toast.error('Device Removed !', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1800
        });
    };

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        setVisible(false);
    }

    return (
        <div className='building-details' data-testid="building-details">
            <Modal visible={visible} width="400" height="350" effect="fadeInDown" onClickAway={CloseModal}>
                <div className='device-modal'>
                    <h1 className='device-modal-title'>Add New Device</h1>
                    <div className='device-modal-content'>
                        <label htmlFor="device-name">Type</label>
                        <select
                            id="device-type"
                            onChange={(event) => handleDeviceType(event.target.value)}
                            value={deviceType}
                        >
                            <option value="camera">Camera</option>
                            <option value="alarm">Alarm</option>
                        </select>
                    </div>
                    <div className='device-modal-content'>
                        <label htmlFor="device-address">Address</label>
                        <input id='device-address' type="text" placeholder="Device address..." />
                    </div>
                    <div className='device-modal-buttons'>
                        <AwesomeButton type="primary" onPress={null}>Add</AwesomeButton>
                        <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                    </div>
                </div>
            </Modal>
            <h2 className='building-details-header'>Building Details</h2>
            <div className='building-details-content'>
                <div className='building-details-content-items'>
                    <h5>Name:</h5>
                    <p>{building!==null ? building.name : ""}</p>
                </div>
                <div className='building-details-content-items'>
                    <h5>Location:</h5>
                    <p>{building!==null ? building.address : ""}</p>
                </div>
            </div>
            <div className='add-new-camara-button'>
                <AwesomeButton type="primary" onPress={OpenModal}>New Device</AwesomeButton>
            </div>
            <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                <li className="table-header">
                    <div className="col col-11">Device</div>
                    <div className="col col-22">Date</div>
                    <div className="col col-33">Health</div>
                    <div className="col col-44">Logs</div>
                    <div className="col col-55">Actions</div>
                </li>
                {devicesList}
            </ul>
        </div>
    )
}

export default BuildingDetails;