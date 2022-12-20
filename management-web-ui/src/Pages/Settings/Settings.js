import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faLock, faBell } from '@fortawesome/free-solid-svg-icons';
import './Settings.css'
import user from './user.png';
import { useState } from 'react';
import { useAuth } from "react-oidc-context";
import Profile from './components/Profile';
import ScreenNavbar from '../../components/Navbar/Navbar';
import { BallTriangle } from 'react-loader-spinner';

const About = () => {
    const auth = useAuth();
    const [active, setActive] = useState("profile");

    const selectChange = (value) => {
        switch (value) {
            case "profile":
                setActive("profile");
                break;
            case "security":
                setActive("security");
                break;
            default:
                return;
        }
    };

    const handleLogout = () => {
        auth.removeUser();
        setTimeout(() => window.location.replace("/"), 1500);
    }

    if (auth.user?.access_token) {
    return (
        <>
            <ScreenNavbar />
            <div className='about' data-testid="settings">
                <div className="tab-items-wrapper">
                    <div className="tab-items-account">
                        <div className="tab-items-account-img-wrapper">
                            <img src={user} alt="User" />
                        </div>
                        <h4 className="tab-items-account-name">{auth.user?.profile.name}</h4>
                    </div>
                    <div className="tab-items-buttons">
                        <div className="tab-items">
                            <ul className="tab-items-list">
                                <li onClick={() => selectChange("profile")} className={active === "profile" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                                    <FontAwesomeIcon icon={faUser} className="tab-item-icon" />Profile
                                </li>
                                <li onClick={() => selectChange("security")} className={active === "security" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                                    <FontAwesomeIcon icon={faKey} className="tab-item-icon" />Security
                                </li>
                            </ul>
                        </div>
                        <div className='logout-section'>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
                <div className="notifications-wrapper">
                    {active === "profile" && <p><Profile name={auth.user?.profile.name} email={auth.user?.profile.email} /></p>}
                    {active === "security" && <p>Security</p>}
                </div>
            </div>
        </>
    )}
    else {
        return (
            <>
                <div className='loading-section'>
                    <BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#ccc"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                    <p>Redirecting to Login...</p>
                </div>
            </>
        )
    }
}

export default About;