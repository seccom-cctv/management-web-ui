import './Settings.css';
import Navbar from '../../components/Navbar/Navbar';
import { AccountContext } from '../../components/Account/Account';
import { useContext, useState, useEffect } from 'react';
import { useAuth } from "react-oidc-context";


const Settings = () => {
    const auth = useAuth();

    const [newPassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");

    

    const onSubmit = (event) => {
        event.preventDefault();
    }

    if (auth.isAuthenticated) {
    return (
        <>  
            <Navbar />
            <div className="settings">
            <h2 className="settings-header">Settings</h2>
            <div>
                <label>Current Email</label>
                <p>{auth.user?.profile.email}</p>
            </div>
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
    ) } else {
        <div>Not authenticated</div>
    }
}

export default Settings;