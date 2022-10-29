import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Modal from 'react-awesome-modal';
import './Home.css';
import { useState } from 'react';
import TableRow from './components/TableRow';

const Home = () => {

    const [visible, setVisible] = useState(false);
    const [companyList, setCompanyList] = useState([]);
    const [companyName, setCompanyName] = useState("");

    const handleCompanyName = (event) => {
        var str = event.target.value;
        setCompanyName(str);
    }

    const onAddBtnClick = event => {
        setCompanyList(companyList.concat(
            <TableRow key={companyName} company={companyName} buildings={0} cameras={0} users={0} />
        )
        );
        setTimeout(() => window.location.replace("/companies"), 500);
        setVisible(false);
    };

    const OpenModal = () => {
        setVisible(true);
    }

    const CloseModal = () => {
        setVisible(false);
    }

    return (
        <>
            <div className='home' data-testid="home">
                <h2 className="home-header">Welcome, Manager</h2>
                <div className="add-company-btn">
                    <AwesomeButton type="primary" onPress={OpenModal}>Add Company</AwesomeButton>
                </div>
                <Modal visible={visible} width="400" height="250" effect="fadeInDown" onClickAway={CloseModal}>
                    <div className='company-modal'>
                        <h1 className='company-modal-title'>Add Company</h1>
                        <div className='company-modal-content'>
                            <label htmlFor="company-name">Name</label>
                            <input id='company-name' type="text" onChange={handleCompanyName} placeholder="Company name..." />
                        </div>
                        <div className='company-modal-buttons'>
                            <AwesomeButton type="primary" onPress={onAddBtnClick}>Add</AwesomeButton>
                            <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className='companies-list'>
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Name</div>
                        <div className="col col-2">Buildings</div>
                        <div className="col col-3">Cameras</div>
                        <div className="col col-4">Users</div>
                        <div className="col col-5">Manage</div>
                    </li>
                    <TableRow key="CompanyX" company="CompanyX" buildings={3} cameras={10} users={3} />
                    <TableRow key="CompanyY" company="CompanyY" buildings={5} cameras={20} users={5} />
                    <TableRow key="CompanyZ" company="CompanyZ" buildings={2} cameras={8} users={4} />
                    <TableRow key="CompanyW" company="CompanyW" buildings={1} cameras={12} users={3} />
                    {companyList}
                </ul>
            </div>
        </>
    )
}

export default Home;