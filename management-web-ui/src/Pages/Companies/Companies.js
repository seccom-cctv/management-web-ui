
import { AwesomeButton } from "react-awesome-button";
import './Companies.css';

const Companies = () => {
    return (
        <div className='companies'>
            <h2 className="companies-header">Company Details</h2>
            <div className="companies-details">
                <div>
                    <div className="companies-details-item">
                        <h5>Name:</h5>
                        <p>CompanyYYW</p>
                    </div>
                    <div className="companies-details-item" style={{marginTop: '2rem'}}>
                        <h5>Date:</h5>
                        <p>10/29/2022</p>
                    </div>
                </div>
                <div>
                    <div className="companies-details-item">
                        <h5>Active Cameras:</h5>
                        <p>0</p>
                    </div>
                    <div className="companies-details-item" style={{marginTop: '2rem'}}>
                        <h5>Users:</h5>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className='companies-buttons'>
                <AwesomeButton type="secondary" onPress={() => {setTimeout(() => window.location.replace("/users"), 1500)}}>Manage Users</AwesomeButton>
                <AwesomeButton type="secondary">Manage Buildings</AwesomeButton>
                <AwesomeButton type="secondary">Manage Cameras</AwesomeButton>
            </div>
        </div>
    )
}

export default Companies;