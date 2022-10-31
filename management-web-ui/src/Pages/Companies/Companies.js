
import { AwesomeButton } from "react-awesome-button";
import './Companies.css';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Companies = () => {
    const [company, setCompany] = useState(null);

    const location = useLocation();

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
            <h2 className="companies-header">Company Details</h2>
            <div className="companies-details">
                <div>
                    <div className="companies-details-item">
                        <h5>Name:</h5>

                        <p>{company!==null ? company[0].name : company}</p>
                    </div>
                    <div className="companies-details-item" style={{ marginTop: '2rem' }}>
                        <h5>Date:</h5>
                        <p>10/29/2022</p>
                    </div>
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
                <Link to={"/buildings"} state={{company: company}}><AwesomeButton type="secondary">Manage Buildings</AwesomeButton></Link>
                <AwesomeButton type="secondary">Manage Cameras</AwesomeButton>
            </div>
        </div>
    )
}

export default Companies;