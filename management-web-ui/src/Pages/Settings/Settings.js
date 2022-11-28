import './Settings.css';
import Navbar from '../../components/Navbar/Navbar';
import { AccountContext } from '../../components/Account/Account';
import { useContext, useState, useEffect } from 'react';


const Settings = () => {

    const [newPassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");

    

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>  
            <Navbar />
            <div className="settings">
            <h2 className="settings-header">Settings</h2>
            <div>
                <form onSubmit={onSubmit}>
                <div className='login-modal-content'>
                        <label htmlFor="current-password">Email</label>
                        <input
                            id="current-password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                        />

                        <label htmlFor="new-password">New Password</label>
                        <input
                            id="new-password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={newPassword}
                        />
                        <button type='submit'>Change Password</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Settings;