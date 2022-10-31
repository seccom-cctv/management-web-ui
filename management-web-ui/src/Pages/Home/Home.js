import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Modal from 'react-awesome-modal';
import './Home.css';
import { useEffect, useState } from 'react';
import TableRow from './components/TableRow';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [info, setInfo] = useState(null);

    useEffect(() => {
        let result = [];
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8082/v1/company/', requestOptions)
            .then(response => response.json())
            .then(data => {
                data.forEach((info) => {
                    result.push(<TableRow id={info.id} company={info.name} address={info.address} buildings={0} cameras={0} users={0} />);
                })
                setInfo(result);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [visible, setVisible] = useState(false);
    const [companyList, setCompanyList] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");

    const handleCompanyName = (event) => {
        var str = event.target.value;
        setCompanyName(str);
    }
    const handleCompanyAddress = (event) => {
        var str = event.target.value;
        setCompanyAddress(str);
    }
    const handleCompanyPhone = (event) => {
        var str = event.target.value;
        setCompanyPhone(str);
    }
    const handleCompanyEmail = (event) => {
        var str = event.target.value;
        setCompanyEmail(str);
    }
    const clearForm = () => {
        setCompanyName("");
        setCompanyAddress("");
        setCompanyPhone("");
        setCompanyEmail("");
        setVisible(false);
    }

    const checkEmail = () => {
        const testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        return (testEmail.test(companyEmail));
    }

    const onAddBtnClick = () => {

        if (!companyName && !companyAddress && !companyPhone && !companyEmail) {
            toast.error('Please fill all fields!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }

        if (!companyName || companyName.length < 3 || companyName === "null") {
            toast.error('Please provide a valid name!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }
        
        if(!companyEmail || !checkEmail() || companyEmail === "null") {
            toast.error('Please provide a valid email!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
            
            clearForm();
            return;
        }

        if (!companyAddress || companyAddress.length < 5 || companyAddress === "null") {
            toast.error('Please provide a valid address!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            clearForm();
            return;
        }

        if (!companyPhone || companyPhone.length < 9 || companyPhone === "null") {
            toast.error('Please provide a valid phone!', {
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
                name: companyName,
                address: companyAddress,
                phone: companyPhone,
                email: companyEmail
            })
        };
        fetch('http://localhost:8082/v1/company/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCompanyList(companyList.concat(
                        <TableRow key={data.id} id={data.id} address={companyAddress} company={companyName} buildings={0} cameras={0} users={0} />
                    )
                    );
                    toast.info('New Company Created !', {
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
        //setTimeout(() => window.location.replace("/companies"), 500);
        setCompanyName("");
        setCompanyAddress("");
        setCompanyPhone("");
        setCompanyEmail("");
        setVisible(false);
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
            <Modal visible={visible} width="400" height="520" effect="fadeInDown" onClickAway={CloseModal}>
                <div className='company-modal'>
                    <h1 className='company-modal-title'>Add Company</h1>
                    <div className='company-modal-content'>
                        <label htmlFor="company-name">Name</label>
                        <input id='company-name' type="text" onChange={handleCompanyName} value={companyName} placeholder="Company name..." />
                    </div>
                    <div className='company-modal-content'>
                        <label htmlFor="company-address">Address</label>
                        <input id='company-address' type="text" onChange={handleCompanyAddress} value={companyAddress} placeholder="Company address..." />
                    </div>
                    <div className='company-modal-content'>
                        <label htmlFor="company-phone">Phone</label>
                        <input id='company-phone' type="text" onChange={handleCompanyPhone} value={companyPhone} placeholder="Company phone..." />
                    </div>
                    <div className='company-modal-content'>
                        <label htmlFor="company-email">Email</label>
                        <input id='company-email' type="text" onChange={handleCompanyEmail} value={companyEmail} placeholder="Company email..." />
                    </div>
                    <div className='company-modal-buttons'>
                        <AwesomeButton type="primary" onPress={onAddBtnClick}>Add</AwesomeButton>
                        <AwesomeButton type="danger" onPress={CloseModal}>Close</AwesomeButton>
                    </div>
                </div>
            </Modal>
            <div className='home' data-testid="home">
                <h2 className="home-header">Welcome, Manager</h2>
                <div className="add-company-btn">
                    <AwesomeButton type="primary" onPress={OpenModal}>Add Company</AwesomeButton>
                </div>
            </div>
            <div className='companies-list'>
                <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                    <li className="table-header">
                        <div className="col col-1">Name</div>
                        <div className="col col-3">Address</div>
                        <div className="col col-2">Buildings</div>
                        <div className="col col-4">Cameras</div>
                        <div className="col col-5">Users</div>
                        <div className="col col-6">Manage</div>
                    </li>
                    {info}
                    {companyList}
                </ul>
            </div>
        </>
    )
}

export default Home;