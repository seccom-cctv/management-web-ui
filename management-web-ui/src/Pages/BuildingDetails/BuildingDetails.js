import './BuildingDetails.css';
import BuildingTableRow from './components/BuildingTableRow';
import { AwesomeButton } from 'react-awesome-button';
import { PencilIcon, PlusCircleIcon } from "@primer/octicons-react"; // custom icons
import Modal from 'react-awesome-modal';
import 'react-awesome-button/dist/styles.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BuildingDetails = () => {
    const [visible, setVisible] = useState(false);
    const [deviceType, setDeviceType] = useState("camera");
    const [deviceName, setDeviceName] = useState("");
    //const [deviceAddress, setDeviceAddress] = useState("");
    const [devicesList, setDeviceList] = useState(null);
    const [building, setBuilding] = useState(null);
    const [renderDevices, setRenderDevices] = useState(false);
    const [inputVisible, setInputVisible] = useState(false);
    const [buildingName, setBuildingName] = useState("");
    const [buildingAddress, setBuildingAddress] = useState("");

    const handleInputVisibility = () => {
        setInputVisible(!inputVisible);
    }

    const handleBuildingName = (event) => {
        var str = event.target.value;
        setBuildingName(str);
    }

    const handleBuildingAddress = (event) => {
        var str = event.target.value;
        setBuildingAddress(str);
    }

    const handlePutBuilding = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: buildingName,
                address: buildingAddress,
                company_id: location.state.building.company_id
            })
        };
        fetch('http://localhost:8082/v1/building/' + location.state.building.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.info('Building Updated !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                    setInputVisible(false);
                } else {
                    toast.error('Something went wrong !', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000
                    });
                }
            })
            .then(() => {
                setBuildingName(buildingName);
                setBuildingAddress(buildingAddress);
            }
            )

    }

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
                    result.push(<BuildingTableRow key={info.id} device={info.name} date="29/10/2022" health="10%" onClick={() => { removeDevice(info.id) }} />);
                });
                setDeviceList(result);
            });
        setBuildingName(location.state.building.name);
        setBuildingAddress(location.state.building.address);
        setBuilding(location.state.building);
        // eslint-disable-next-line
    }, [location, renderDevices])

    const clearForm = () => {
        setDeviceName("");
        setDeviceType("camera");
        setVisible(false);
    }

    const addNewDevice = () => {

        if (!deviceName || deviceName.length < 3 || deviceName === "null") {
            toast.error('Please fill all fields!', {
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
                name: deviceName,
                type: deviceType,
                building_id: location.state.building.id
            })
        };
        fetch('http://localhost:8082/v1/device/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setDeviceList(devicesList.concat(
                        <BuildingTableRow key={data.id} device={data.name} date="29/10/2022" health="10%" onClick={() => { removeDevice(data.id) }} />
                    )
                    );
                    toast.info('New Device Created !', {
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
        setVisible(false);
    }

    const handleDeviceType = (newDevice) => {
        setDeviceType(newDevice);
    }

    const handleDeviceName = (event) => {
        var str = event.target.value;
        setDeviceName(str);
    }

    // const handleDeviceAddress = (event) => {
    //     var str = event.target.value;
    //     setDeviceAddress(str);
    // }

    const removeDevice = (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/device/' + id, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setRenderDevices(!renderDevices);
                    toast.error('Device Removed !', {
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
    };

    const OpenModal = () => {
        clearForm();
        setVisible(true);
    }

    const CloseModal = () => {
        clearForm();
        setVisible(false);
    }

    return (
        <>
            <ToastContainer />
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
                            <label htmlFor="device-name">Name</label>
                            <input id='device-name' type="text" value={deviceName} onChange={handleDeviceName} placeholder="Device name..." />
                        </div>
                        <div className='device-modal-buttons'>
                            <AwesomeButton type="primary" onPress={addNewDevice}>Add</AwesomeButton>
                            <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                        </div>
                    </div>
                </Modal>
                <h2 className='building-details-header'>Building Details</h2>
                <div className='building-details-content'>
                    {
                        inputVisible &&
                        <>
                            <div className='building-details-content-items'>
                                <h5>Name:</h5>
                                <input type="text" value={buildingName} onChange={handleBuildingName} id="input-name" />
                            </div>
                            <div className='building-details-content-items'>
                                <h5>Location:</h5>
                                <input type="text" value={buildingAddress} onChange={handleBuildingAddress} id="input-address" />
                            </div>
                        </>
                    }
                    {
                        !inputVisible &&
                        <>
                            <div className='building-details-content-items'>
                                <h5>Name:</h5>
                                <p>{buildingName}</p>
                            </div>
                            <div className='building-details-content-items'>
                                <h5>Location:</h5>
                                <p>{buildingAddress}</p>
                            </div>
                        </>
                    }
                </div>
                <div className='add-new-camara-button'>
                    {
                        !inputVisible &&
                        <AwesomeButton type="primary" onPress={handleInputVisibility}>Edit Building</AwesomeButton>
                    }
                    {
                        inputVisible &&
                        <AwesomeButton type="primary" onPress={handlePutBuilding}>Confirm Edit</AwesomeButton>
                    }
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
        </>
    )
}

export default BuildingDetails;