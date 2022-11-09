
import { AwesomeButton } from "react-awesome-button";
import './Companies.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Companies = () => {
    const [company, setCompany] = useState(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");

    const handleInputVisibility = () => {
        setInputVisible(!inputVisible);
    }

    const location = useLocation();

    const handleCompanyName = (event) => {
        var str = event.target.value;
        setCompanyName(str);
    }

    const handleCompanyAddress = (event) => {
        var str = event.target.value;
        setCompanyAddress(str);
    }

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/company/?id=' + location.state.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCompanyName(data[0].name);
                setCompanyAddress(data[0].address);
                setCompanyPhone(data[0].phone);
                setCompanyEmail(data[0].email);
            });
        // eslint-disable-next-line
    }, [])

    const handlePutCompany = () => {
        if (!companyName || companyName.length <= 3 || companyName === "null") {
            toast.error('Company name cant be null!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            return;
        }

        if (!companyAddress || companyAddress.length <= 3 || companyAddress === "null") {
            toast.error('Company address cant be null!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            return;
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: companyName,
                address: companyAddress,
                phone: companyPhone,
                email: companyEmail,
                company_id: location.state.id
            })
        };
        fetch('http://localhost:8082/v1/company/' + location.state.id, requestOptions)
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
                setCompanyName(companyName);
                setCompanyAddress(companyAddress);
            }
            )

    }


    useEffect(() => {
        // get of company from id
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/company/?id=' + location.state.id, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCompany(data);
            });
    }, [location])

    return (
        <div className='companies'>
            <ToastContainer />
            <h2 className="companies-header">Company Details</h2>
            <div className="companies-details">
                <div>
                    {
                        inputVisible &&
                        <>
                            <div className="companies-details-item">
                                <h5>Name:</h5>
                                <input type="text" value={companyName} onChange={handleCompanyName} id="input-name" />
                            </div>
                            <div className="companies-details-item" style={{ marginTop: '2rem' }}>
                                <h5>Address:</h5>
                                <input type="text" value={companyAddress} onChange={handleCompanyAddress} id="input-address" />
                            </div>
                        </>
                    }
                    {
                        !inputVisible &&
                        <>
                            <div className="companies-details-item">
                                <h5>Name:</h5>

                                <p>{companyName}</p>
                            </div>
                            <div className="companies-details-item" style={{ marginTop: '2rem' }}>
                                <h5>Address:</h5>
                                <p>{companyAddress}</p>
                            </div>
                        </>
                    }
                </div>
                <div>
                    <div className="companies-details-item">
                        <h5>Active Cameras:</h5>
                        <p>0</p>
                    </div>
                    <div className="companies-details-item" style={{ marginTop: '2rem' }}>
                        <h5>Users:</h5>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className='companies-buttons'>
                <AwesomeButton type="secondary" onPress={() => { setTimeout(() => window.location.replace("/users"), 500) }}>Manage Users</AwesomeButton>
                <Link to={"/buildings"} state={{ company: company }}><AwesomeButton type="secondary">Manage Buildings</AwesomeButton></Link>
                {
                    !inputVisible &&
                    <AwesomeButton type="secondary" onPress={handleInputVisibility}>Edit Company</AwesomeButton>
                }
                {
                    inputVisible &&
                    <AwesomeButton type="secondary" onPress={handlePutCompany}>Confirm Edit</AwesomeButton>
                }
            </div>
        </div>
    )
}

export default Companies;